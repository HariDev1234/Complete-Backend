import dotenv from "dotenv";
dotenv.config();

if(!process.env.MONGO_CONNECT_STRING) {
    throw new Error("MONGO_CONNECT_STRING is not defined in the environment variables");
}
if(!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
}
if(!process.env.CLIENT_ID_EMAIL) {
    throw new Error("CLIENT_ID_EMAIL is not defined in the environment variables");
}
if(!process.env.CLIENT_SECRET_EMAIL) {
    throw new Error("CLIENT_SECRET_EMAIL is not defined in the environment variables");
}
if(!process.env.GOOGLE_REFRESH_EMAIL_TOKEN) {
    throw new Error("GOOGLE_REFRESH_EMAIL_TOKEN is not defined in the environment variables");
}
if(!process.env.GOOGLE_USER_EMAIL) {
    throw new Error("GOOGLE_USER_EMAIL is not defined in the environment variables");
}

const config = {
    PORT: process.env.PORT || 3000,
    MONGO_CONNECT_STRING: process.env.MONGO_CONNECT_STRING,
    JWT_SECRET: process.env.JWT_SECRET,
    CLIENT_ID_EMAIL: process.env.CLIENT_ID_EMAIL,
    CLIENT_SECRET_EMAIL: process.env.CLIENT_SECRET_EMAIL,
    GOOGLE_REFRESH_EMAIL_TOKEN: process.env.GOOGLE_REFRESH_EMAIL_TOKEN,
    GOOGLE_USER_EMAIL: process.env.GOOGLE_USER_EMAIL
}

export default config;