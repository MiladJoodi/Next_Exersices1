const MiddleBanner = require("../models/MiddleBanner");

const getAllMiddleBan = async (req, res) => {
    try{
        const AllMidBans = await MiddleBanner.find();
        res.status(200).json(AllMidBans)
    }catch(err){
        console.log(err)
        res.status(400).json({msg: "error"})
    }
};
module.exports.getAllMiddleBan = getAllMiddleBan