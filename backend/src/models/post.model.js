const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        default: ""
    },
    imgUrl: {
        type: String,
        required:[true,"Image url is required for creating an post"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "user id is required for creating an post"]
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }]
})


const postModel = mongoose.model("posts", postSchema)

  

module.exports = postModel