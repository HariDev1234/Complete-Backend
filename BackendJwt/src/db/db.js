const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_CONNECT_STRING);
        console.log("Connected DB successfully")
    } catch {
        console.log("Failed to connect DB")
    }
}

module.exports = connectDB;