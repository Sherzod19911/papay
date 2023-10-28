
const Product = require("../models/Product");
const assert = require("assert");
const Definer =  require("../lib/mistake");

let productController = module.exports;


productController.getAllProducts = async(req,res) => {
    try {
        console.log('GET: cont/getAllProducts');

    }catch(err) {
        console.log(`ERROR, cont/getAllProducts, ${err.message}`);
       res.json({state: 'fail', message: err.message})
    }
};

productController.addNewProduct = async(req,res) => {
    try {
        console.log("POST: cont/addNewProduct");
    
        assert(req.files, Definer.general_err3);

        const product = new Product();
        let data = req.body;

        data.product_images = req.files.map((ele) => {
            return ele.path;
        });
        
        const result = await product.addNewProductData(data, req.member);
        assert.ok(result, Definer.product_err1)

        const html = `<script>
                       alert(new dusg added successfully);
                       window.location.replace("/resto/products/menu");
                     </script>`;
        res.end(html);
       
       // console.log(data);
        //res.send('ok');
        //TODO:product creation develop 
    

        }catch(err) {
        console.log(`ERROR, cont/addNewProduct, ${err.message}`);
    
   // res.json({state: 'fail', message: err.message}) nima uchun res json bn qaytarish q\xato  degansiz
    } 
};

productController.updateChosenProduct = async(req,res) => {
    try { 
        console.log('POST: cont/upateChosenProduct');
        const product = new Product();
        const id = req.params.id;
        const result = await product.updateChosenProductData(
            id,
            req.body,
            req.member._id);
            
        res.json ({state: "success", data: result});
        
    }catch(err) {
        console.log(`ERROR, cont/updateChosenProduct, ${err.message}`);
        res.json({state: 'fail', message: err.message})

    
    }
}; 


