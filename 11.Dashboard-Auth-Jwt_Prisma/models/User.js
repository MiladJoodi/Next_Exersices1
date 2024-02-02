const mongoose = require("mongoose")

const schema = mongoose.Schema({
    firstname: {
        type: String,
        // maxlength: 15,
        required: true
    },
    lastname: {
        type: String,
        // maxlength: 15,
        required: true
    },
    username: {
        type: String,
        // maxlength: 32,
        required: true
    },
    email: {
        type: String,
        // maxlength: 32,
        required: true
    },
    password: {
        type: String,
        // maxlength: 32,
        required: true
    },
    role: {
        type: String,
        required: true 
    },
})

const model = mongoose.models.User || mongoose.model('User', schema)
export default model;

