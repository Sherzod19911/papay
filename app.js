console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const router = require("./router.js");
const router_bssr = require("./router_bssr.js");

// let session =  require("express-session");
// const MongoDBStore = require("connect-mongodb-session")(session);
// const Store = new.MongoDBStore({
//     url:process.env.MONGO_URL,
//     collection:"session",
// });

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code
// app.use{
//     session({

//     })



// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.use("/resto",router_bssr);
app.use("/", router_bssr);
//app.use("/resto",router_bssr);

module.exports = app;


//shuni aytishim kerakki bizning front end loyihamiz ikki xil buladi
//1.admin va restorant userlar uchun
//2.bizning xaridorlar uchun
//biri reactda qurilai
// biri ejsda quriladi 
// ejs frameworki BSSR YANI BACKENDA FRONT ENNDI QURIB OlISH HISOBLANADI.(ananaviy usul)
//zamonaviy  usul bu single page application yani react hisoblanai
//bssrda session ishlatiladi
// reactda esa tooken authentification ishlatiladi

