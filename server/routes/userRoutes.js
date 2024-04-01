const express=require("express");
const router=express.Router();


//import here controller 

const {createProducts}=require("../controller/createProducts")
const {updateProducts} =require("../controller/updateProducts")
const{findAllProducts,findByIdProduct}=require("../controller/findAllProduct");
const {deleteProducts}=require("../controller/deleteProducts");
const{editP}=require("../controller/editP")


router.post("/addProduct" ,createProducts);
// router.put('/updateProduct/:id' ,updateProducts);

router.get("/allProducts" ,findAllProducts);
router.get("/findByIdProduct/:id",findByIdProduct);
router.delete("/deleteProduct/:id" ,deleteProducts);
router.put("/edit/:id" ,editP);


module.exports=router;