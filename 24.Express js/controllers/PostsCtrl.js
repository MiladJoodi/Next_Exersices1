const Post = require("../models/Post")

const getAllPosts = async (req, res) => {
    try {
        const allPosts = await Post.find()
        allPosts.reverse()
        res.status(200).json(allPosts)
    } catch (e) {
        res.status(400).json({ mgs: "خطا" })
    }
}
module.exports.getAllPosts = getAllPosts


//Create Post
const createPost = async (req, res) => {
    try {
        const postData = req.body;
        await Post.create(postData)
        res.status(200).json({ msg: "post created" })
    } catch (e) {
        res.status(400).json({ msg: "post created error" })
    }
}
module.exports.createPost = createPost

//Get One Post
const getOnePost = async (req, res) => {
    try {
        // const thePost = await Post.findById(req.params.id);
        const thePost = await Post.findOne({_id: req.params.id});
        res.status(200).json(thePost)
    } catch (e) {
        res.status(400).json({ mgs: "خطا" })
    }
}
module.exports.getOnePost = getOnePost

//Update Post
const updatePost = async (req, res) => {
    try {
        const newData = req.body;
        await Post.findByIdAndUpdate(req.params.id, newData, {new: true});
        res.status(200).json({msg: "post updated"})
    } catch (e) {
        res.status(400).json({ mgs: "خطا" })
    }
}
module.exports.updatePost = updatePost

//Delete
const removePost = async (req, res) => {
    try {
        await Post.deleteOne({_id: req.params.id});
        res.status(200).json({msg: "post deleted"})
    } catch (e) {
        res.status(400).json({ mgs: "خطا" })
    }
}
module.exports.removePost = removePost