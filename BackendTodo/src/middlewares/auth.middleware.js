const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({
            message: "Unauthorized user"
        })
    }
    const decoded = await jwt.verify(token, process.env.JWT_CONNECT_STRING);
    if(!decoded) {
        return res.status(401).json({
            message: "Unauthorized user"
        })
    }

    req.user = decoded;
    next();
};

module.exports = authMiddleware;