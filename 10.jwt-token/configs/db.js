const mongoose = require("mongoose")

const connectToDB = async = ()=>{
    try{
        if(mongoose.connections[0].readyState){
            return false
        }else{
            await mongoose.connect("mongodb://localhost:27017/next-auth")
        }

    } catch(err){
        console.log('DB Conncetion has Error', err)
    }
}