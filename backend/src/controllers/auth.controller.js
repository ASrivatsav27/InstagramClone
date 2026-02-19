const userModel = require('../models/user.model')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')


async function registerController (req, res) {
  const { username, email, password, bio, profileImage } = req.body

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ email }, { username }]
  })

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "User already exists"
    })
  }

  const hash = await bcrypt.hash(password,10)

  const user = await userModel.create({
    username,
    email,
    bio,
    profileImage,
    password: hash
  })

  const token = jwt.sign(
    {
      id: user._id,
      username:user.username
    },
    process.env.JWT_SECRET
  )

  res.cookie('jwt_token', token)

    res.status(201).json({
    message: "registered successfully",
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      profileImage: user.profileImage
    }
  })
}

async function loginController(req, res) {
  const { username, email, password } = req.body

  const user = await userModel.findOne({
    $or: [{ username: username }, { email: email }]
  })

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    })
  }

  const isPasswordCorrect =
    await bcrypt.compare(password, user.password)


  if (!isPasswordCorrect) {
    return res.status(404).json({
      message: "Invalid password"
    })
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      username: user.username
    },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  )

  res.cookie('jwt_token', token)

   res.status(200).json({
    message: "User loggedIn successfully",
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      profileImage: user.profileImage
    }
  })
}


module.exports = {
    registerController,
    loginController
}