const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");
const productController = require("./controllers/productController");

 console.log("199111111");
/********************REACT API ***************************/

// memberga dahldor routerlar
//router.get("/", memberController.home);
router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);
router.get("/check-me", memberController.checkMyAuthentication);
router.get("/member/:id", 
memberController.retrieveAuthMember, 
memberController.getChosenMember
);
       
// product related routers    
router.post("/products", 
memberController.retrieveAuthMember,
productController.getAllProducts);
 
module.exports = router;
