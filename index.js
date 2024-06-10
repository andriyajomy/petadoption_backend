// loads .env file contents into process.env by default

require('dotenv').config()

// import express

const express = require('express')

const cors = require('cors')
const db = require('./DB/connection')

const router = require('./Routes/Router')

const appMiddleware = require('./Middlewares/appMiddleware')


// create a backend application using express

const petServer = express()

// use cors
petServer.use(cors())
petServer.use(express.json())
petServer.use(appMiddleware)   // for  entire application
petServer.use(router)
petServer.use('/uploads',express.static('./uploads')) // image exporting to frontend
//Returns middleware that only parses json and 
//only looks at requests where the Content-Type header matches the type option.

// port creation
const PORT = 4000 || process.env.PORT

// server listening

petServer.listen(PORT,()=>{
    console.log("Listening on port " + PORT);
})

// when a req is passed to localhost 4000 a response is recieved
petServer.get('/',(req,res)=>{
    res.send(`<h1>PET ADOPTION WEBSITE STARTED</h1>`)
})
