const mongoose = require("mongoose");

const connectToDB = async ()=>{
    try {
        if (mongoose.connections[0].readyState){
            return false;
        }
        await mongoose.connect("mongodb://localhost:27017/next-db")
        console.log("Connected!")
    } catch (err){
        console.log("Error => ", err);
    }
}

export default connectToDB;