import dotenv from "dotenv";
dotenv.config();

if(!process.env.MONGO_CONNECT_STRING) {
    throw new Error(`MONGO_CONNECT_STRING key is missing in ENV file`)
};
if(!process.env.JWT_SECRET) {
    throw new Error(`JWT_SECRET connection string is missing in ENV file`)
};

const config = {
    PORT: process.env.PORT,
    MONGO_CONNECT_STRING: process.env.MONGO_CONNECT_STRING,
    JWT_SECRET: process.env.JWT_SECRET
};

export default config;