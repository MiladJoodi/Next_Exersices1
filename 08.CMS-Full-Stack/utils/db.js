const { default: mongoose } = require("mongoose")

const connectToDB = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            return false;
        } else {
            await mongoose.connect('mongodb://localhost:27017/next-cms')
            console.log("Connect to Database Successfully")
        }
    } catch (err) {
        console.log("Error=> ", err)
    }
}

export default connectToDB;
