require("dotenv").config();
const express=require("express");
const cors=require("cors");
const path=require("path");
const {initDb}=require("./db");

const authRoutes=require("./routes/auth");
const listingsRoutes=require("./routes/listings");
const favoritesRoutes=require("./routes/favorites");
const ordersRoutes=require("./routes/orders");
const messagesRoutes=require("./routes/messages");

const app=express();
const PORT=process.env.PORT||4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/uploads",express.static(path.join(__dirname,"uploads")));

app.use("/api/auth",authRoutes);
app.use("/api/listings",listingsRoutes);
app.use("/api/favorites",favoritesRoutes);
app.use("/api/orders",ordersRoutes);
app.use("/api/messages",messagesRoutes);

app.get("/api/health",(req,res)=>res.json({ok:true,time:new Date().toISOString()}));

const FRONTEND_DIR=path.join(__dirname,"frontend");
app.use(express.static(FRONTEND_DIR));
app.get("*",(req,res,next)=>{
  if(req.path.startsWith("/api")||req.path.startsWith("/uploads"))return next();
  res.sendFile(path.join(FRONTEND_DIR,"index.html"));
});

app.use((err,req,res,next)=>{
  console.error(err);
  res.status(err.status||500).json({error:err.message||"Erreur serveur."});
});

async function start(){
  await initDb();
  app.listen(PORT,()=>console.log(`balled API running on port ${PORT}`));
}
start().catch(err=>{console.error("Database initialization failed:",err);process.exit(1);});
