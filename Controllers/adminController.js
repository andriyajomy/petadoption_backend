// logics for all project

const pets = require('../Models/petSchema')




exports.addpet = async(req,res)=>{
    console.log("Inisde addpet");

   //get userId

   const userId = req.payload
    // get petImage
const petImage = req.file.filename
    // get petDetails
const {kciId,breed,gender,age,about,cost} = req.body
console.log(userId,kciId,breed,gender,age,about,cost,petImage);

// logic for adding pet details
// res.status(200).json("ADD pet request Successfull")

try{
// if kci id is present in mongodb
const existingPet = await pets.findOne({kciId})
if (existingPet){
    res.status(402).json("Pet Already Added")
}
else{
// if kciId is not present then add the new pet details and save them in mongodb

const newPet = new pets({
    kciId,breed,gender,age,about,cost,petImage,userId
})

await newPet.save()
res.status(200).json(newPet) // passes the created data to the client
}

}
catch(err){
    res.status(407).json({message:err.message})
}

}
// const petImage= req.file.filename
// get paticular admin pets

exports.getAllAdminPets = async(req,res)=>{
    //get userID
    const userId = req.payload;
    // get all pets added by a particular admin

    try{
// api call
const adminPet = await pets.find({userId})
res.status(200).json(adminPet) // send all pets to frontend
    }
    catch(err){
res.status(401).json("Internal Server Error" + err.message)
    }
}

// get all pet details 

exports.getAllPets  = async(req,res) =>{

const searchKey = req.query.search
const query ={
    breed :{$regex:searchKey,
    $options:"i"    // to ignore case sensitivity
}
}

    try{
const allPets = await pets.find(query)
res.status(200).json(allPets) 
    }
    catch(err){
        res.status(401).json("Internal Server Error" + err.message)
 
    }
}

// get home projects

exports.getHomePet = async(req,res)=>{
    try{
const homePet = await pets.find().limit(6)
res.status(200).json(homePet)
    }
    catch(err){
        res.status(401).json("Internal Server Error" + err.message)
  
    }
}

// update pet detaila

exports.updatePet = async(req,res)=>{
    const {kciId,breed,gender,age,about,cost,petImage} = req.body
    const uploadImage = req.file? req.file.filename:petImage
    userId = req.payload
    const {pid} = req.params
    try{

        // find the particular pet , update and save
const updatePet = await pets.findByIdAndUpdate({_id:pid},{kciId,breed,gender,age,about,cost,petImage:uploadImage,userId})
// to save 
await updatePet.save()
// response
res.status(200).json(updatePet)
    }
    catch(err){
        res.status(401).json("Internal Server Error" + err.message)
 
    }
}


// to delete the pet details

exports.deletePet = async(req,res)=>{
    const {pid} = req.params
    try{
const deleteAdminPet = await pets.findOneAndDelete({_id:pid})
res.status(200).json(deleteAdminPet)
    }
    catch(err){
        res.status(401).json("Internal Server Error" + err.message)
   
    }
}