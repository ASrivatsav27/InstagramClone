const express = require('express')
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })
const identifyUser= require("../middlewares/auth.middleware")







postRouter.post('/',identifyUser,upload.single("image"), postController.createPostController)



postRouter.get('/',identifyUser,postController.getPostController)
postRouter.get("/details/:postId",identifyUser,postController.getPostDetails)

/**
 * @route POST /post/like/:postid
 * @description like a post with the id provided in the request params
 */
postRouter.post('/like/:postId',identifyUser,postController.likePostController)


module.exports = postRouter