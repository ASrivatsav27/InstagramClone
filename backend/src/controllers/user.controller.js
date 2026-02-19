const followModel = require('../models/follow.model')





async function followUserController(req, res) {

    const followerUsername = req.user.username
    const followingUsername= req.params.username

    const followRecord = await followModel.create({
        follower: followerUsername,
        following:followingUsername
    })

    res.status(201).json({
          message: `You are now following ${followingUsername}`,followRecord
      })
}






module.exports = {followUserController}