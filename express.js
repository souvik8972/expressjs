
const bodyparser=require('body-parser')
const path=require("path")

const express=require("express");
const app= express();
const adminRotes=require("./routes/admin.js")
const shopRotes=require("./routes/shop.js")
const contactRotes=require("./routes/contact.js")

app.use("/",(req,res,next)=>{
    console.log("repeting")
    next();
})
app.use(bodyparser.urlencoded({extended: true}))

app.use(adminRotes)
app.use(shopRotes)
app.use(contactRotes)

app.use(express.static(path.join(__dirname,"public")))
app.listen(3000)