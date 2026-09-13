const express = require("express");
const { pool, query } = require("../db");
const { requireAuth } = require("../middleware/auth");
const router = express.Router();

function calcCheckout(price) {
  const serviceFee=Math.max(15,Math.round(price*0.05*100)/100);
  const deposit=Math.max(30,Math.round(price*0.15*100)/100);
  const dueAtDelivery=Math.round((price+serviceFee-deposit)*100)/100;
  const total=Math.round((price+serviceFee)*100)/100;
  return {serviceFee,deposit,dueAtDelivery,total};
}
const VALID_STATUSES=["pending_deposit","confirmed","shipped","delivered","refused","cancelled"];

function serializeOrder(row){return {
  id:row.id, listing:{id:row.listing_id,title:row.title,price:row.price,image:row.image},
  buyer:{id:row.buyer_id,name:row.buyer_name}, seller:{id:row.seller_id,name:row.seller_name},
  price:row.price,serviceFee:row.service_fee,deposit:row.deposit,dueAtDelivery:row.due_at_delivery,
  deliveryAddress:row.delivery_address,deliveryCity:row.delivery_city,status:row.status,
  trackingNumber:row.tracking_number,carrier:row.carrier,createdAt:row.created_at
};}

const ORDER_JOIN=`SELECT o.*,l.title AS title,
 (SELECT url FROM listing_images WHERE listing_id=l.id ORDER BY position LIMIT 1) AS image,
 bu.name AS buyer_name,su.name AS seller_name
 FROM orders o JOIN listings l ON l.id=o.listing_id JOIN users bu ON bu.id=o.buyer_id JOIN users su ON su.id=o.seller_id`;

router.post("/",requireAuth,async(req,res,next)=>{
  const client=await pool.connect();
  try{
    const {listingId,deliveryAddress,deliveryCity}=req.body||{};
    if(!listingId||!deliveryAddress)return res.status(400).json({error:"Article et adresse de livraison sont requis."});
    await client.query("BEGIN");
    const listing=(await client.query("SELECT * FROM listings WHERE id=$1 FOR UPDATE",[listingId])).rows[0];
    if(!listing){await client.query("ROLLBACK");return res.status(404).json({error:"Article introuvable."});}
    if(listing.status!=="active"){await client.query("ROLLBACK");return res.status(409).json({error:"Cet article n'est plus disponible."});}
    if(String(listing.seller_id)===String(req.userId)){await client.query("ROLLBACK");return res.status(400).json({error:"Vous ne pouvez pas acheter votre propre article."});}
    const c=calcCheckout(Number(listing.price));
    const info=(await client.query(
      `INSERT INTO orders(listing_id,buyer_id,seller_id,price,service_fee,deposit,due_at_delivery,delivery_address,delivery_city,status)
       VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,'confirmed') RETURNING id`,
      [listing.id,req.userId,listing.seller_id,listing.price,c.serviceFee,c.deposit,c.dueAtDelivery,deliveryAddress,deliveryCity||null]
    )).rows[0];
    await client.query("UPDATE listings SET status='sold' WHERE id=$1",[listing.id]);
    await client.query("COMMIT");
    const row=(await query(`${ORDER_JOIN} WHERE o.id=$1`,[info.id])).rows[0];
    res.status(201).json({order:serializeOrder(row)});
  }catch(e){await client.query("ROLLBACK").catch(()=>{});next(e);}finally{client.release();}
});

router.get("/mine",requireAuth,async(req,res,next)=>{
  try{const role=req.query.role==="seller"?"seller_id":"buyer_id";const rows=(await query(`${ORDER_JOIN} WHERE o.${role}=$1 ORDER BY o.created_at DESC`,[req.userId])).rows;res.json({orders:rows.map(serializeOrder)});}
  catch(e){next(e);}
});
router.get("/:id",requireAuth,async(req,res,next)=>{
  try{const row=(await query(`${ORDER_JOIN} WHERE o.id=$1`,[req.params.id])).rows[0];if(!row)return res.status(404).json({error:"Commande introuvable."});if(String(row.buyer_id)!==String(req.userId)&&String(row.seller_id)!==String(req.userId))return res.status(403).json({error:"Accès non autorisé à cette commande."});res.json({order:serializeOrder(row)});}
  catch(e){next(e);}
});
router.patch("/:id/status",requireAuth,async(req,res,next)=>{
  try{
    const {status,trackingNumber,carrier}=req.body||{};if(!VALID_STATUSES.includes(status))return res.status(400).json({error:"Statut invalide."});
    const order=(await query("SELECT * FROM orders WHERE id=$1",[req.params.id])).rows[0];if(!order)return res.status(404).json({error:"Commande introuvable."});
    if(String(order.seller_id)!==String(req.userId)&&String(order.buyer_id)!==String(req.userId))return res.status(403).json({error:"Accès non autorisé à cette commande."});
    await query("UPDATE orders SET status=$1,tracking_number=COALESCE($2,tracking_number),carrier=COALESCE($3,carrier) WHERE id=$4",[status,trackingNumber||null,carrier||null,req.params.id]);
    if(status==="refused"||status==="cancelled")await query("UPDATE listings SET status='active' WHERE id=$1",[order.listing_id]);
    const row=(await query(`${ORDER_JOIN} WHERE o.id=$1`,[req.params.id])).rows[0];res.json({order:serializeOrder(row)});
  }catch(e){next(e);}
});
module.exports=router;
