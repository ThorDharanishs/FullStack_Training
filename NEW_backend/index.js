const express = require("express")
const app = express()
app.use(express.json())

require("dotenv").config()
require("./db")

const port = process.env.PORT

app.get('/',(req,res)=>{
    res.send("welcome to the page")
})

app.get('/user/:userID',(req,res)=>{
    const userID = req.params.userID
    res.send(`the user id : ${userID}`)
})

app.get('/user/:userID/:name/:age/profile',(req,res)=>{
    const userID = req.params.userID
    const name = req.params.name
    const age = req.params.age
    res.send(`welcome ${name} your id ${userID} and your age is ${age}`)
})

app.listen(port,()=>{
    console.log("listening at port 3000")
})