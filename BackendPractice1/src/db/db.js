const mongoose = require("mongoose");


async function connectDB() {
    
    try {
        await mongoose.connect(process.env.MONGO_CONNECT_STRING);

        console.log('Connected DB successfully');
    } catch(error) {
        console.log('DB connection failed', error)
    }
};

module.exports = connectDB;