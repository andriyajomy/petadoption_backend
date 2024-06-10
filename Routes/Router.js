const express = require('express')

const userController = require('../Controllers/userController')

const adminController = require('../Controllers/adminController')

const bookingController = require('../Controllers/bookingController')

const jwtMiddleware = require('../Middlewares/jwtMiddleware')

const multerConfig = require('../Middlewares/multerMiddleware')
// create router object of express to define path

const router = new express.Router()
// using router object to define path

// register api path -http://localhost:4000/register
router.post('/register',userController.register)

// login api path - http://localhost:4000/login
router.post('/login',userController.login)

//addpet http://localhost:4000/pet/add

router.post('/pet/add',jwtMiddleware,multerConfig.single('petImage') ,adminController.addpet)

// get all admin added pets http://localhost:4000/pets/admin-added-pets
router.get('/pet/admin-added-pets',jwtMiddleware,adminController.getAllAdminPets)

// get all project path
router.get('/pet/all-pet',adminController.getAllPets )

// get home project
router.get('/pet/home-pet',adminController.getHomePet)

// update 

router.put('/pet/update-pet/:pid',jwtMiddleware,multerConfig.single('petImage'),adminController.updatePet)

// delete pet

router.delete('/pet/delete-pet/:pid',jwtMiddleware,adminController.deletePet)


// add user booking API Path
router.post('/booking/add',jwtMiddleware,bookingController.addUserBooking)

// get user booking

router.get('/booking/get',bookingController.getAllUserBooking)

module.exports = router

