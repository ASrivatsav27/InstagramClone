const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: [true,"username already exists"],
        required: [true,"username is required"]
    },
    email: {
        type: String,
        unique: [true, "already exists"],
        required: [true,"email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },

    bio: String,
    profileImage: {
        type: String,
        default:""
    }
  


})


const userModel = mongoose.model('users', userSchema)


module.exports = userModel