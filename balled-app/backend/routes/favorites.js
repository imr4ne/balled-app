const express = require("express");
const { query } = require("../db");
const { requireAuth } = require("../middleware/auth");
const router = express.Router();

const LISTING_JOIN = `
  SELECT l.*, u.name AS seller_name, u.avatar_initials AS seller_avatar,
         u.rating AS seller_rating, u.city AS seller_city
  FROM listings l JOIN users u ON u.id = l.seller_id
`;

function serializeListing(row, images) {
  return {
    id: row.id, title: row.title, brand: row.brand, category: row.category,
    condition: row.condition, size: row.size, price: row.price, oldPrice: row.old_price,
    description: row.description, status: row.status, createdAt: row.created_at,
    seller: { id: row.seller_id, name: row.seller_name, avatarInitials: row.seller_avatar, rating: row.seller_rating, city: row.seller_city },
    images: images.map(i => i.url), isFavorited: true,
  };
}

router.get("/", requireAuth, async (req,res,next) => {
  try {
    const rows=(await query(`${LISTING_JOIN} JOIN favorites f ON f.listing_id=l.id WHERE f.user_id=$1 ORDER BY f.created_at DESC`,[req.userId])).rows;
    const out=[];
    for(const r of rows) {
      const imgs=(await query("SELECT url FROM listing_images WHERE listing_id=$1 ORDER BY position",[r.id])).rows;
      out.push(serializeListing(r,imgs));
    }
    res.json({listings:out});
  } catch(e){next(e);}
});

router.post("/:listingId", requireAuth, async(req,res,next)=>{
  try {
    if(!(await query("SELECT id FROM listings WHERE id=$1",[req.params.listingId])).rows[0]) return res.status(404).json({error:"Article introuvable."});
    await query("INSERT INTO favorites (user_id,listing_id) VALUES ($1,$2) ON CONFLICT DO NOTHING",[req.userId,req.params.listingId]);
    res.status(201).json({success:true});
  }catch(e){next(e);}
});

router.delete("/:listingId", requireAuth, async(req,res,next)=>{
  try { await query("DELETE FROM favorites WHERE user_id=$1 AND listing_id=$2",[req.userId,req.params.listingId]); res.json({success:true}); }
  catch(e){next(e);}
});
module.exports=router;
