const mongoose = require('mongoose')

async function connectDb() {
    await mongoose.connect("mongodb+srv://srivatsav:Oezz7kbHl1qTMl3h@cluster0.xbuwmrx.mongodb.net/")
    .then(() => console.log('database connected'))
}



module.exports = connectDb