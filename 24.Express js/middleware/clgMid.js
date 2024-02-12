module.exports = async function (req, res, next) {
    console.log("in the middleware")
    // if(req.body.title > 8){
        next()
    // }else{
        // res.status(400).json({msg: "title should be longer than 8 chars"})
    // }
}