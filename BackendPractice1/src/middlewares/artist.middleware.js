const jwt = require("jsonwebtoken");

async function artistMiddleware(req, res, next) {
    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({
            message: "Unauthorized user"
        })
    }

    try {
        const decoded = await jwt.verify(token, process.env.JWT_CONNECT_STRING);

        if(decoded.role !== "artist") {
            return res.status(401).json({
                message: "Unauthorized user"
            })
        }
        req.user = decoded;
        next();
    } catch(error) {
        return res.status(401).json({
            message: "Unauthorized user"
        })
    }
}

module.exports = artistMiddleware