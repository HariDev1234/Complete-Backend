import dotenv from "dotenv";
dotenv.config();

if(!process.env.MONGO_CONNECT_STRING) {
    throw new Error("MONGO_CONNECT_STRING is not defined in the environment variables.");
}
if(!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variables.");
}

const config = {
    mongoConnectString: process.env.MONGO_CONNECT_STRING,
    JWT_SECRET: process.env.JWT_SECRET
}

export default config;