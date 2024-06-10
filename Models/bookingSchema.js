const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    pets:{
        type:Array,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    totalPets:{
        type:String,
        required:true
    },
    totalPrice:{
        type:String,
        required:true
    }
})

const bookings = mongoose.model("bookings",bookingSchema)
module.exports = bookings