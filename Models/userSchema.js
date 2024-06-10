const mongoose = require('mongoose')
// schema creation
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    userType:{
        type:String,
    },
})
// model -users(which is the collection in mongodb)
const users= mongoose.model("users",userSchema)
 // 1st one is the name of the model(as string)and the next is the name of the schema
 // export it

 module.exports = users


















