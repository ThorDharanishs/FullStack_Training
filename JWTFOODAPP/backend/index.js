const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require('dotenv').config();

const foodModel = require('./models/Food')

const app = express()
const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI)

app.use(cors())
app.use(express.json())

app.post('/insert',async (req,res)=>{
    const foodName = req.body.foodName;
    const daySinceIAte = req.body.daySinceIAte;
    const food = new foodModel({ foodName: foodName, daySinceIAte : daySinceIAte})
    try{
        await food.save()
        res.status(201).send("Food item inserted successfully")
    } catch (error){
        res.status(401).send("Not inserted successfully")
    }
})

app.get('/read', async (req,res)=>{
    try {
        const foodItems = await foodModel.find({})
        res.status(200).json(foodItems)
    } catch (error) {
        res.status(500).send("Error reading items")
    }
})

app.put('/update',async(req, res)=>{
    const newFoodName = req.body.newFoodName
    const id = req.body.id;
    try {
        await foodModel.findByIdAndUpdate(id, {foodName: newFoodName})
        res.status(200).send("Food item updated successfully")
    } catch (error) {
        res.status(500).send("Error updating")
    }
})

app.delete("/delete/:id",async (req,res) =>{
    const id = req.params.id;
   try {
        await foodModel.findByIdAndDelete(id)
        res.status(200).send("Food item deleted successfully")
    } catch (error) {
        res.status(500).send("Error deleting")
    }
})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})