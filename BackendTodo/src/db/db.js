const mongoose = require("mongoose");

async function connectDB() {

    try {
        await mongoose.connect(process.env.MONGO_CONNECT_STRING);
        console.log(`DB connected successfully`)
    } catch(error) {
        console.log(`Failed to connect DB`, error);
    }
};

module.exports = connectDB;