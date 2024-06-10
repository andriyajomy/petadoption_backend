// node + mongodb connection

const mongoose = require ('mongoose')

const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log("Mongodb Connection Established");
})

.catch(err=>{
    console.log("MongoDb connection error" + err.message);
})