const express=require('express');
const app=express()
const route=express.Router()
const path=require("path")


route.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"..","view","contact.html"))

})
route.post('/contact',(req,res,next)=>{
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Submitted</title>
        </head>
        <body style="background-color: #ffffff; color: #0074d9; font-family: Arial, sans-serif; text-align: center;">
            <h1>Submitted</h1>
        </body>
        </html>
    `;
    res.send(htmlContent)
})

module.exports=route;