const mongoose = require("mongoose")

const uri = "mongodb+srv://dharanishs:dharanishs@host.wdpehu4.mongodb.net/"

mongoose.connect(uri)
.then(()=>console.log("MongoDb connected successfully"))
.catch(err=>console.log("Not Connected"))


const userSchema = new mongoose.Schema({
    userName : {type:String ,require:true},
    email:{type:String,require : true,unique : true},
    age : {type:String,require:true}
})

