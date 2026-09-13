const express=require("express");
const {query}=require("../db");
const {requireAuth}=require("../middleware/auth");
const router=express.Router();

function serializeMessage(row){return {id:row.id,listingId:row.listing_id,senderId:row.sender_id,receiverId:row.receiver_id,body:row.body,read:!!row.read,createdAt:row.created_at};}

router.get("/conversations",requireAuth,async(req,res,next)=>{
  try{
    const sql=`WITH convo AS (
      SELECT m.listing_id,
        CASE WHEN m.sender_id=$1 THEN m.receiver_id ELSE m.sender_id END AS other_user_id,
        MAX(m.created_at) AS last_message_at
      FROM messages m
      WHERE m.sender_id=$1 OR m.receiver_id=$1
      GROUP BY m.listing_id, CASE WHEN m.sender_id=$1 THEN m.receiver_id ELSE m.sender_id END
    )
    SELECT c.listing_id AS "listingId", l.title AS "listingTitle",
      (SELECT url FROM listing_images WHERE listing_id=l.id ORDER BY position LIMIT 1) AS "listingImage",
      c.other_user_id AS "otherUserId", u.name AS "otherUserName",u.avatar_initials AS "otherUserAvatar",
      c.last_message_at AS "lastMessageAt",
      (SELECT m2.body FROM messages m2 WHERE m2.listing_id=c.listing_id
        AND ((m2.sender_id=$1 AND m2.receiver_id=c.other_user_id) OR (m2.sender_id=c.other_user_id AND m2.receiver_id=$1))
        ORDER BY m2.created_at DESC LIMIT 1) AS "lastMessageBody",
      (SELECT COUNT(*) FROM messages m3 WHERE m3.listing_id=c.listing_id AND m3.sender_id=c.other_user_id
        AND m3.receiver_id=$1 AND m3.read=0) AS "unreadCount"
    FROM convo c JOIN listings l ON l.id=c.listing_id JOIN users u ON u.id=c.other_user_id
    ORDER BY c.last_message_at DESC`;
    res.json({conversations:(await query(sql,[req.userId])).rows});
  }catch(e){next(e);}
});

router.get("/:listingId/:otherUserId",requireAuth,async(req,res,next)=>{
  try{
    const {listingId,otherUserId}=req.params;
    const rows=(await query(`SELECT * FROM messages WHERE listing_id=$1 AND ((sender_id=$2 AND receiver_id=$3) OR (sender_id=$3 AND receiver_id=$2)) ORDER BY created_at ASC`,[listingId,req.userId,otherUserId])).rows;
    await query("UPDATE messages SET read=1 WHERE listing_id=$1 AND receiver_id=$2 AND sender_id=$3",[listingId,req.userId,otherUserId]);
    res.json({messages:rows.map(serializeMessage)});
  }catch(e){next(e);}
});

router.post("/",requireAuth,async(req,res,next)=>{
  try{
    const {listingId,receiverId,body}=req.body||{};
    if(!listingId||!receiverId||!body||!body.trim())return res.status(400).json({error:"Article, destinataire et message sont requis."});
    if(Number(receiverId)===Number(req.userId))return res.status(400).json({error:"Vous ne pouvez pas vous envoyer un message à vous-même."});
    if(!(await query("SELECT id FROM listings WHERE id=$1",[listingId])).rows[0])return res.status(404).json({error:"Article introuvable."});
    if(!(await query("SELECT id FROM users WHERE id=$1",[receiverId])).rows[0])return res.status(404).json({error:"Destinataire introuvable."});
    const row=(await query("INSERT INTO messages(listing_id,sender_id,receiver_id,body) VALUES($1,$2,$3,$4) RETURNING *",[listingId,req.userId,receiverId,body.trim()])).rows[0];
    res.status(201).json({message:serializeMessage(row)});
  }catch(e){next(e);}
});
module.exports=router;
