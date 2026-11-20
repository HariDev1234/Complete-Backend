import jwt from "jsonwebtoken"
import config from "../config/config.js";

async function authMiddleware(req, res, next) {
    try {
        const token = req.headers?.authorization?.split(" ")[1];
        if(!token) {
            return res.status(400).json({
                status: "error",
                message: "Unauthorized"
            });
        };
        const decoded = await jwt.verify(token, config.JWT_TOKEN_STRING);

        req.user = decoded;
        next();

    } catch(error) {
        next(error);
    } 
};
export default authMiddleware;