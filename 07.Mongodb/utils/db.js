const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    }

    await mongoose.connect("mongodb://127.0.0.1:27017/next-db");
    console.log("Connected To DB Successfully :))");
  } catch (err) {
    console.log("Error in DB Connection =>", err);
  }
};

export default connectToDB;
