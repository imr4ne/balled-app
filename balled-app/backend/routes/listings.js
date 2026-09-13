const express = require("express");
const multer = require("multer");
const { query } = require("../db");
const { requireAuth, optionalAuth } = require("../middleware/auth");
const { uploadBuffer, deleteImage } = require("../cloudinary");

const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 6 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (/^image\/(jpeg|png|webp|gif)$/.test(file.mimetype)) cb(null, true);
    else cb(new Error("Seules les images (jpg, png, webp, gif) sont acceptées."));
  },
});

const CATEGORIES = ["women", "men", "kids", "shoes", "accessories", "home"];
const CONDITIONS = ["new_tag", "very_good", "good", "fair"];

function serializeListing(row, images, favoritedByUser) {
  return {
    id: row.id, title: row.title, brand: row.brand, category: row.category,
    condition: row.condition, size: row.size, price: row.price, oldPrice: row.old_price,
    description: row.description, status: row.status, createdAt: row.created_at,
    seller: { id: row.seller_id, name: row.seller_name, avatarInitials: row.seller_avatar, rating: row.seller_rating, city: row.seller_city },
    images: images.map(i => i.url), isFavorited: !!favoritedByUser,
  };
}

const LISTING_JOIN = `
  SELECT l.*, u.name AS seller_name, u.avatar_initials AS seller_avatar,
         u.rating AS seller_rating, u.city AS seller_city
  FROM listings l JOIN users u ON u.id = l.seller_id
`;

async function getImages(listingId) {
  const r = await query("SELECT url, public_id FROM listing_images WHERE listing_id = $1 ORDER BY position", [listingId]);
  return r.rows;
}

router.get("/", optionalAuth, async (req, res, next) => {
  try {
    const { category, condition, q, page = 1, pageSize = 20 } = req.query;
    const clauses = ["l.status = 'active'"], params = [];
    if (category && category !== "all") { params.push(category); clauses.push(`l.category = $${params.length}`); }
    if (condition && condition !== "all") { params.push(condition); clauses.push(`l.condition = $${params.length}`); }
    if (q) { params.push(`%${q}%`, `%${q}%`); clauses.push(`(l.title ILIKE $${params.length-1} OR l.brand ILIKE $${params.length})`); }

    const where = `WHERE ${clauses.join(" AND ")}`;
    const limit = Math.min(parseInt(pageSize, 10) || 20, 50);
    const pageNum = Math.max(parseInt(page, 10) || 1, 1);
    const offset = (pageNum - 1) * limit;
    const dataParams = [...params, limit, offset];

    const rows = (await query(`${LISTING_JOIN} ${where} ORDER BY l.created_at DESC LIMIT $${dataParams.length-1} OFFSET $${dataParams.length}`, dataParams)).rows;
    const total = Number((await query(`SELECT COUNT(*) AS c FROM listings l ${where}`, params)).rows[0].c);
    const favIds = req.userId
      ? new Set((await query("SELECT listing_id FROM favorites WHERE user_id = $1", [req.userId])).rows.map(r => String(r.listing_id)))
      : new Set();

    const data = [];
    for (const row of rows) data.push(serializeListing(row, await getImages(row.id), favIds.has(String(row.id))));
    res.json({ listings: data, total, page: pageNum, pageSize: limit });
  } catch (err) { next(err); }
});

router.get("/mine/all", requireAuth, async (req, res, next) => {
  try {
    const rows = (await query(`${LISTING_JOIN} WHERE l.seller_id = $1 ORDER BY l.created_at DESC`, [req.userId])).rows;
    const data = [];
    for (const row of rows) data.push(serializeListing(row, await getImages(row.id), false));
    res.json({ listings: data });
  } catch (err) { next(err); }
});

router.get("/:id", optionalAuth, async (req, res, next) => {
  try {
    const row = (await query(`${LISTING_JOIN} WHERE l.id = $1`, [req.params.id])).rows[0];
    if (!row) return res.status(404).json({ error: "Article introuvable." });
    const images = await getImages(row.id);
    const favorited = req.userId
      ? !!(await query("SELECT 1 FROM favorites WHERE user_id = $1 AND listing_id = $2", [req.userId, row.id])).rows[0]
      : false;
    res.json({ listing: serializeListing(row, images, favorited) });
  } catch (err) { next(err); }
});

router.post("/", requireAuth, upload.array("images", 6), async (req, res, next) => {
  try {
    const { title, brand, category, condition, size, price, description } = req.body;
    if (!title || !category || !condition || !price) return res.status(400).json({ error: "Titre, catégorie, état et prix sont requis." });
    if (!CATEGORIES.includes(category)) return res.status(400).json({ error: "Catégorie invalide." });
    if (!CONDITIONS.includes(condition)) return res.status(400).json({ error: "État invalide." });
    const priceNum = parseFloat(price);
    if (!(priceNum > 0)) return res.status(400).json({ error: "Prix invalide." });

    const listing = (await query(
      `INSERT INTO listings (seller_id,title,brand,category,condition,size,price,description)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id`,
      [req.userId, title.trim(), brand || null, category, condition, size || "Unique", priceNum, description || null]
    )).rows[0];
    const listingId = listing.id;

    for (let i = 0; i < (req.files || []).length; i++) {
      const file = req.files[i];
      const uploaded = await uploadBuffer(file.buffer, file.mimetype);
      await query(
        "INSERT INTO listing_images (listing_id,url,position,public_id) VALUES ($1,$2,$3,$4)",
        [listingId, uploaded.secure_url || uploaded.url, i, uploaded.public_id]
      );
    }

    const row = (await query(`${LISTING_JOIN} WHERE l.id = $1`, [listingId])).rows[0];
    res.status(201).json({ listing: serializeListing(row, await getImages(listingId), false) });
  } catch (err) { next(err); }
});

router.put("/:id", requireAuth, async (req, res, next) => {
  try {
    const listing = (await query("SELECT * FROM listings WHERE id = $1", [req.params.id])).rows[0];
    if (!listing) return res.status(404).json({ error: "Article introuvable." });
    if (String(listing.seller_id) !== String(req.userId)) return res.status(403).json({ error: "Vous ne pouvez modifier que vos propres articles." });

    const fields = ["title","brand","category","condition","size","price","description","status"];
    const updates = [], params = [];
    for (const f of fields) if (req.body[f] !== undefined) {
      params.push(f === "price" ? parseFloat(req.body[f]) : req.body[f]);
      updates.push(`${f} = $${params.length}`);
    }
    if (!updates.length) return res.status(400).json({ error: "Aucune donnée à mettre à jour." });
    params.push(req.params.id);
    await query(`UPDATE listings SET ${updates.join(", ")} WHERE id = $${params.length}`, params);
    const row = (await query(`${LISTING_JOIN} WHERE l.id = $1`, [req.params.id])).rows[0];
    res.json({ listing: serializeListing(row, await getImages(req.params.id), false) });
  } catch (err) { next(err); }
});

router.delete("/:id", requireAuth, async (req, res, next) => {
  try {
    const listing = (await query("SELECT * FROM listings WHERE id = $1", [req.params.id])).rows[0];
    if (!listing) return res.status(404).json({ error: "Article introuvable." });
    if (String(listing.seller_id) !== String(req.userId)) return res.status(403).json({ error: "Vous ne pouvez supprimer que vos propres articles." });

    const images = await getImages(req.params.id);
    for (const img of images) await deleteImage(img.public_id);
    await query("DELETE FROM listings WHERE id = $1", [req.params.id]);
    res.json({ success: true });
  } catch (err) { next(err); }
});

module.exports = router;
