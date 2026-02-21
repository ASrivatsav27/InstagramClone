
const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')

app.use(cors({
    origin: "http://localhost:5173",
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
/* require routes */
const authRouter = require('./routes/auth.routes')
const postRouter = require('./routes/post.routes')
const userRouter = require('./routes/user.routes')
/* using routes */
app.use("/auth", authRouter)
app.use("/post", postRouter)
app.use('/users',userRouter)




module.exports = app