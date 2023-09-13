const express= require("express");
const Route=express.Router();

Route.get("/add-product", (req, res, next) => {
    console.log("in a product");
    res.send("<form action='/product' method='POST'>  <input type='text' name='title'><button type='submit'>submit</button></form>");
});
Route.post('/product',(req,res,next)=>{
    console.log(req.body)
res.redirect('/add-product')

})







module.exports=Route;