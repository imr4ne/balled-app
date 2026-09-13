const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { query } = require("../db");
const { requireAuth, JWT_SECRET } = require("../middleware/auth");

const router = express.Router();

function publicUser(u) {
  return {
    id: u.id, name: u.name, email: u.email, city: u.city,
    avatarInitials: u.avatar_initials, rating: u.rating, createdAt: u.created_at,
  };
}

router.post("/register", async (req, res, next) => {
  try {
    const { name, email, password, city } = req.body || {};
    if (!name || !email || !password) return res.status(400).json({ error: "Nom, email et mot de passe sont requis." });
    if (password.length < 6) return res.status(400).json({ error: "Le mot de passe doit contenir au moins 6 caractères." });

    const normalizedEmail = email.toLowerCase().trim();
    const existing = await query("SELECT id FROM users WHERE email = $1", [normalizedEmail]);
    if (existing.rows[0]) return res.status(409).json({ error: "Un compte existe déjà avec cet email." });

    const passwordHash = bcrypt.hashSync(password, 10);
    const initials = name.trim().split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();
    const result = await query(
      `INSERT INTO users (name,email,password_hash,city,avatar_initials)
       VALUES ($1,$2,$3,$4,$5) RETURNING *`,
      [name.trim(), normalizedEmail, passwordHash, city || null, initials]
    );
    const user = result.rows[0];
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "30d" });
    res.status(201).json({ token, user: publicUser(user) });
  } catch (err) {
    if (err.code === "23505") return res.status(409).json({ error: "Un compte existe déjà avec cet email." });
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) return res.status(400).json({ error: "Email et mot de passe sont requis." });
    const result = await query("SELECT * FROM users WHERE email = $1", [email.toLowerCase().trim()]);
    const user = result.rows[0];
    if (!user || !bcrypt.compareSync(password, user.password_hash)) return res.status(401).json({ error: "Email ou mot de passe incorrect." });
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "30d" });
    res.json({ token, user: publicUser(user) });
  } catch (err) { next(err); }
});

router.get("/me", requireAuth, async (req, res, next) => {
  try {
    const result = await query("SELECT * FROM users WHERE id = $1", [req.userId]);
    const user = result.rows[0];
    if (!user) return res.status(404).json({ error: "Utilisateur introuvable." });
    res.json({ user: publicUser(user) });
  } catch (err) { next(err); }
});

module.exports = router;
