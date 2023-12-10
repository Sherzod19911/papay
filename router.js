const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");
const productController = require("./controllers/productController");
const restaurantController = require("./controllers/restaurantController");
const orderController = require("./controllers/orderController");

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
productController.getAllProducts
);

router.get(
    "/products/:id",
    memberController.retrieveAuthMember,
    productController.getChosenProduct
  );
 
  //Restaurant related routers
router.get(
  "/restaurants",
  memberController.retrieveAuthMember,
  restaurantController.getRestaurants
);

router.get(
  "/restaurants/:id",
  memberController.retrieveAuthMember,
  restaurantController.getChosenRestaurant
);


//order related "routers"

router.post("/orders/create",  
memberController.retrieveAuthMember, 
orderController.createOrder
);

router.get(
  "/orders",
  memberController.retrieveAuthMember,
  orderController.getMyOrders
);

router.post(
  "/orders/edit",
  memberController.retrieveAuthMember,
  orderController.editChosenOrder
)
module.exports = router;
