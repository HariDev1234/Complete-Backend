import mongoose from "mongoose";
import config from "./config.js";

async function connectDB() {
    try {
        await mongoose.connect(config.MONGO_DB_STRING);
        console.log(`Connected DB successfully`);
    } catch(error) {
        throw new Error(`Failing to connect DB`, error)
    }
}
export default connectDB;