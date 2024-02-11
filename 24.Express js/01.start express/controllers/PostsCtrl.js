const Post = require("../models/Post")

const getAllPosts = async (req, res) => {
    try {
        const allPosts = await Post.find()
        res.status(200).json({ mgs: "this is posts page" })
    } catch (e) {
        res.status(400).json({ mgs: "خطا" })
    }
}

module.exports.getAllPosts = getAllPosts


//Create Post
const createPost = async (req, res) => {
    try {
        const postData = {
            title: 'post 1',
            viewNum: 4
        }

        await Post.create(postData)

        res.status(200).json({ msg: "post created" })
    } catch (e) {
        res.status(400).json({ msg: "post created error" })
    }

}

module.exports.createPost = createPost