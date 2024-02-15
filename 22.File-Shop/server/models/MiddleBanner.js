const mongoose = require('mongoose');
const MiddleBanner = new mongoose.Schema({
    image:{
        required: true,
        type: String
    },
    imageAlt:{
        required: true,
        type: String
    },
    situation:{
        required: true,
        type: Boolean
    },
    link:{
        required: true,
        type: String
    }
})
module.exports = mongoose.model("MiddleBanner", MiddleBanner);