// logics are defined
// logic for register
const users =require('../Models/userSchema')

const jwt = require('jsonwebtoken')

exports.register = async(req,res)=>{
    console.log("Inside register Function");
    try{
const {username,email,password,userType} =req.body
console.log(`${username} ${email} ${password}`);
const existingUser =await users.findOne({email})
if(existingUser){
    res.status(402).json("User Already Exists")
}
else{
    const newUser = new users({
        username,email,password,userType
    })
    await newUser.save() // data saved to mongodb
    res.status(200).json("User created Successfully")

}
    }
    catch(err){
        res.status(500).json("Server Error")

    }
}

// logic for login

exports.login =async(req,res)=>{
    const {email,password} =req.body

    try{
const user = await users.findOne({email,password})
if(user){
    const token = jwt.sign({userId:user._id},"superkey2024")
    console.log(token);
    res.status(200).json({user,token}) // login successful

}
else{
    res.status(401).json("Invalid User")
}
    }
    catch(err){
        res.status(500).json("Server Error" + err.message)
 
    }
}

