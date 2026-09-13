require("dotenv").config();
const bcrypt=require("bcryptjs");
const {query,initDb}=require("./db");

async function main(){
  await initDb();
  const existing=Number((await query("SELECT COUNT(*) AS c FROM listings")).rows[0].c);
  if(existing>0){console.log(`La base contient déjà ${existing} article(s) — seed ignoré.`);return;}

  const demoUsers=[
    {name:"Léa Bennani",email:"lea@example.com",city:"Casablanca"},
    {name:"Tom Idrissi",email:"tom@example.com",city:"Rabat"},
    {name:"Camille Alaoui",email:"camille@example.com",city:"Casablanca"}
  ];
  const passwordHash=bcrypt.hashSync("password123",10);
  const ids=[];
  for(const u of demoUsers){
    const initials=u.name.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();
    const r=await query("INSERT INTO users(name,email,password_hash,city,avatar_initials) VALUES($1,$2,$3,$4,$5) RETURNING id",[u.name,u.email,passwordHash,u.city,initials]);
    ids.push(r.rows[0].id);
  }
  const images=[
    "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600&h=700&fit=crop",
    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&h=700&fit=crop",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=700&fit=crop",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=700&fit=crop",
    "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=700&fit=crop",
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=700&fit=crop"
  ];
  const listings=[
    ["Sézane","Robe fluide imprimée","women","new_tag","36",120,"Portée une seule fois, état impeccable."],
    ["Nike","Air Max 90 blanches","shoes","very_good","42",380,"Semelle en très bon état, boîte d'origine incluse."],
    ["Zara","Manteau en laine mélangée","women","good","M",250,"Quelques bouloches légères, rien de visible porté."],
    ["Levi's","Jean 501 délavé","men","very_good","W32",150,"Coupe droite classique, aucun accroc."],
    ["Polène","Sac cabas cuir camel","accessories","new_tag","Unique",420,"Jamais utilisé, avec pochette et dustbag."],
    ["COS","Pull col rond mérinos","men","good","L",140,"Très chaud, petit bouloche sous la manche."]
  ];
  for(let i=0;i<listings.length;i++){
    const [brand,title,category,condition,size,price,description]=listings[i];
    const r=await query("INSERT INTO listings(seller_id,title,brand,category,condition,size,price,description) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id",[ids[i%ids.length],title,brand,category,condition,size,price,description]);
    await query("INSERT INTO listing_images(listing_id,url,position) VALUES($1,$2,0)",[r.rows[0].id,images[i]]);
  }
  console.log(`Seed terminé : ${demoUsers.length} utilisateurs, ${listings.length} articles.`);
}
main().catch(e=>{console.error(e);process.exit(1);});
