console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const router = require("./router.js");
const router_bssr = require("./router_bssr.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

let session =  require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const store = new MongoDBStore({
    uri:process.env.MONGO_URL,
    collection:"sessions",     
});

// 1: Kirish code
app.use(express.static("public"));
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        credentials: true,     
        origin: true,    
    })     
    );           
app.use(cookieParser());

// 2: Session code
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        cookie: {
            maxAge: 1000*60*30,
        },
        store: store,
        resave:true,
        saveUninitialized: true,
    })
);
app.use(function(req, res, next) {
    res.locals.member = req.session.member;
    next();
});

// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.use("/resto", router_bssr);
app.use("/", router);


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

