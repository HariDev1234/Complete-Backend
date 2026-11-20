import dotenv from "dotenv";
dotenv.config();

if(!process.env.MONGO_DB_STRING) {
    throw new Error('MONGO_DB_STRING is missing in env');
}
if(!process.env.JWT_TOKEN_STRING) {
    throw new Error('JWT_TOKEN_STRING is missing in env')
}

const config = {
    MONGO_DB_STRING: process.env.MONGO_DB_STRING,
    JWT_TOKEN_STRING: process.env.JWT_TOKEN_STRING
}

export default config;