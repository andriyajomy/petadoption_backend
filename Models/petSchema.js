const mongoose = require ('mongoose')

const petSchema = new mongoose.Schema({
    kciId:{
type:String,
required:true
    },
    
    breed:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    cost:{
        type:String,
        required:true
    },
    petImage:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})

// model creation similar to collection in the mongodb

const pets= mongoose.model("pets",petSchema) 
module.exports = pets


