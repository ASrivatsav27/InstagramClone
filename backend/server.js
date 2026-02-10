require('dotenv').config()
const app = require('./src/app')
const connectDb = require('./src/config/database')

connectDb()




app.listen(8000, () => {
    console.log("server is running on port 8000")
})