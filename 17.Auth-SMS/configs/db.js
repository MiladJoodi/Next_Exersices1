const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    } else {
      await mongoose.connect("mongodb://localhost:27017/next-sms");
      console.log("Conntect To DB Successfully :))");
    }
  } catch (err) {
    console.log("DB Connecction Error =>", err);
  }
};

export default connectToDB;
