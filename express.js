const http=require("http")
const bodyparser=require('body-parser')

const express=require("express");
const app= express();
const adminRotes=require("./routes/admin.js")
const shopRotes=require("./routes/shop.js")

app.use("/",(req,res,next)=>{
    console.log("repeting")
    next();
})
app.use(bodyparser.urlencoded({extended: true}))

app.use(adminRotes)
app.use(shopRotes)


app.listen(3000)