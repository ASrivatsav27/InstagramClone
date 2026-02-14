const express = require('express')
const app = express()
const authRouter = require('./routes/auth.routes')
const postRouter = require('./routes/post.routes')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())
app.use("/auth", authRouter)
app.use("/post",postRouter)




module.exports = app