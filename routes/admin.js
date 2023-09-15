const express= require("express");
const Route=express.Router();
const path=require("path")

Route.get("/add-product", (req, res, next) => {
    console.log("in a product");
    res.sendFile(path.join(__dirname,"..","view","add-product.html"))
});
Route.post('/add-product',(req,res,next)=>{
    console.log(req.body)
res.redirect('/')

})







module.exports=Route;