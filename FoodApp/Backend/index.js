const express = require("express")
const mongoose = require("mongoose")
const food  = require("./models/Food")
require("dotenv").congig()
app.use(express.json())

const port = process.env.PORT

app.get('/',(req,res)=>{
    res.send("WElcome you")
})

app.listen(3000,()={
    console.log("listening at port 3000")
})
