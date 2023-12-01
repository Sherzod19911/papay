const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");

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
       
// boshqa routerlar      
router.get("/menu", (req, res) => {
  res.send("Menu sahifadasiz");
});
router.get("/community", (req, res) => {
  res.send("Jamiyat sahifadasiz");
});

module.exports = router;
