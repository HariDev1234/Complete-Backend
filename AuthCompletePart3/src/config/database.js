import mongoose from "mongoose";
import config from "./config.js";


async function connectDB() {
    try {
        await mongoose.connect(config.MONGO_CONNECT_STRING);
        console.log(`Connected to DB successfully`)
    } catch (error) {
        console.error(`Failed to connect DB`, error);
    }
};

export default connectDB;