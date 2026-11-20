import jwt from "jsonwebtoken";
import config from "../config/config.js";

async function verifyToken(req, res, next) {
    try {
        const token = req.headers?.authorization?.split(" ")[1];

        if(!token) {
            return res.status(400).json({
                status: "error",
                message: "Token is missing"
            })
        }
        const decoded = await jwt.verify(token, config.JWT_TOKEN_STRING);
        if(!decoded) {
            return res.status(400).json({
                status: "error",
                message: "Invalid token"
            })
        };
        req.user = decoded;

        next();
    } catch(error) {
        throw new Error(`Invalid Token`, error)
    }
};
export default verifyToken;