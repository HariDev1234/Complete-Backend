import jwt from "jsonwebtoken";
import config from "../config/config.js";


async function authenticateToken(req, res, next) {
    try {
        const token = req.headers?.authorization?.split(" ")[1];

        
        if(!token) {
            return res.status(401).json({
                message: "Token not found"
            })
        }
        const decoded = await jwt.verify(token, config.JWT_SECRET);
        if(!decoded) {
            return res.status(401).json({
                message: "Unauthorized"
            })
        }
        req.user = decoded;

        next();
    } catch (error) {
        next(error);
    }
}

export default authenticateToken;