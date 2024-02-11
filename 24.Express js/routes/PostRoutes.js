const express = require("express");
const router = express();

const postCtrl = require("../controllers/PostsCtrl");

router.get("/posts", postCtrl.getAllPosts);
router.post("/new-post", postCtrl.createPost);
router.get("/get-one-post:id", postCtrl.getOnePost);

module.exports = router;