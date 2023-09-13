const express= require("express");
const Route=express.Router();



Route.get("/",(re,res,next)=>{
    console.log("in a middle ware");
    res.send("hiii")
});


module.exports=Route;