import mongoose from "mongoose";
import config from "./config.js";

async function connectDB() {
    try {
        await mongoose.connect(config.MONGO_DB_STRING);
        console.log(`Connect to DB successfully`);
    } catch(error) {
        console.error(`Failed to connect DB`, error);
        throw new Error(`Failed to connect DB`, error);
    }
}
export default connectDB;