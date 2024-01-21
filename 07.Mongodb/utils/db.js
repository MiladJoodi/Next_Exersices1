const mongoose = require("mongoose");

const connectToDB = ()=>{
    
}

mongoose
  .connect("mongodb://localhost:27017/next-db")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("Error => ", err));
