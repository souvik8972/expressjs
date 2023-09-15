const express= require("express");
const Route=express.Router();
const path=require("path")


Route.get("/",(req,res,next)=>{
    console.log("in a middle ware");
    res.sendFile(path.join(__dirname,"..","view","shop.html"))
});


module.exports=Route;