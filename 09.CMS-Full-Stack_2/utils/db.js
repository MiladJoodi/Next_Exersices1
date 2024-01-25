const { default: mongoose } = require("mongoose")

const connectToDB = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            return false;
        } else {
            await mongoose.connect('http://127.0.0.1:4000/posts')
            console.log("Connect to Database Successfully")
        }
    } catch (err) {
        console.log("Error=> ", err)
    }
}

export default connectToDB;
