const express = require("express")
const userRouter = express.Router()
const userController = require('../controllers/user.controller')
const identifyUser = require('../middlewares/auth.middleware')
/**
 * @route POST  /users/follow/:userid
 * @description follow a user with their given :username
 * @access Private
 */


userRouter.post('/follow/:username', identifyUser, userController.followUserController)
userRouter.post('/follow/:follower/accept', identifyUser, userController.acceptUserController)
userRouter.post('/follow/:follower/rejected', identifyUser, userController.rejectUserController)
userRouter.post('/unfollow/:username',identifyUser,userController.unfollowUserController)

 

module.exports = userRouter