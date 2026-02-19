const followModel = require('../models/follow.model')
const userModel = require('../models/user.model')




async function followUserController(req, res) {
 
    const followerUsername = req.user.username
    const followingUsername = req.params.username

    const isFollowingExist = await userModel.findOne({
        username:followingUsername
    })
    if (!isFollowingExist) {
        return res.status(404).json({
           message: `User ${followingUsername} does not exist`
        })
    }
    if (followerUsername === followingUsername) {
        return res.status(404).json({
            message:"You cannot follow yourself"
        })
    }
    const isAlreadyFollowing = await followModel.findOne({
        follower: followerUsername,
        following: followingUsername,
    })
     
    if (isAlreadyFollowing) {
        return res.status(409).json({
            message:`User : ${followerUsername} is already following ${followingUsername}`
        })
    }

    const followRecord = await followModel.create({
        follower: followerUsername,
        following: followingUsername,
        status: "pending"
    })

    res.status(201).json({
          message: `Follow request sent to ${followingUsername}`,followRecord
      })
}
async function acceptUserController(req, res) {
    const followerUsername = req.params.follower
    const followingUsername = req.user.username
    
    const request = await followModel.findOne({
        follower: followerUsername,
        following: followingUsername,
        status: "pending"
    })

    if (!request) {
        return res.status(404).json({
            message: "request not found"
        })
    }
    request.status = "accepted"
    await request.save()
    res.status(201).json({
        message: `${followerUsername} is now following ${followingUsername}`,
        followRequest: request
    })
}
async function rejectUserController(req, res) {
      const followerUsername = req.params.follower
    const followingUsername = req.user.username
    
    const request = await followModel.findOne({
        follower: followerUsername,
        following: followingUsername,
        status: "pending"
    })

    if (!request) {
        return res.status(404).json({
            message: "request not found"
        })
    }
    request.status = "rejected"
    await request.save()
    res.status(201).json({
        message: `${followerUsername} is not following ${followingUsername}`,
        followRequest: request
    })
}
async function unfollowUserController(req, res) {
    const followerUsername = req.user.username
    const followingUsername = req.params.username

    const isUserFollowing = await followModel.findOne({
        follower: followerUsername,
        following: followingUsername,
    })


    if (!isUserFollowing) {
        return res.status(200).json({
           message: `You are not following this user ${followingUsername}`
       })
   }
    
    await followModel.findByIdAndDelete(isUserFollowing._id)
   
    res.status(200).json({
        message: `You have unfollowed ${followingUsername}`
    })

}



module.exports = {followUserController,acceptUserController,rejectUserController,unfollowUserController}