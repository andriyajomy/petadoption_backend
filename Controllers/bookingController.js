const bookings = require('../Models/bookingSchema')

exports.addUserBooking = async(req,res)=>{
    console.log("INside addUserBooking");
    // get booking details

    const {pets,date, totalPrice,totalPets} = req.body
    console.log(pets,date,totalPrice,totalPets);

    // logic for adding booking details


    try{
        const newBooking = new bookings({
            pets,date,totalPrice,totalPets
        });
        await newBooking.save() // save new booking to mongodb
        return res.status(200).json(newBooking)
    }catch(err){
        res.status(404).json({message:err.message})
    }

}


// get all user booked pets 

exports.getAllUserBooking = async(req,res)=>{
    // get all bookings of  a particular user

    try{
// api call
const userBooking = await bookings.find()
res.status(200).json(userBooking)   // sends to the frontend

    }
    catch(err){
res.status(401).json("Internal server error" + err.message)
    }
}