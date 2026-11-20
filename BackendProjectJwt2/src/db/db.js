const mongoose = require("mongoose");


async function connectDB() {

    try {
        await mongoose.connect(process.env.MONGO_DB_STRING);
        console.log("Connected to DB")
    } catch(err) {
        console.error("Failed to connect DB", err)
    }
}

module.exports = connectDB;