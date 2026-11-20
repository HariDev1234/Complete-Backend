import dotenv from "dotenv";
dotenv.config();

if(!process.env.MONGO_DB_STRING) {
    throw new Error('MONGO_DB_STRING missing in .env file');
};

if(!process.env.JWT_TOKEN_STRING) {
    throw new Error('JWT_TOKEN_STRING missing in .env file');
};
const config = {
    MONGO_DB_STRING: process.env.MONGO_DB_STRING,
    JWT_TOKEN_STRING: process.env.JWT_TOKEN_STRING
};

export default config;