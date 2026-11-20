import authModel from "../models/auth.model.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import config from "../config/config.js";
import sessionModel from "../models/session.model.js";


async function userRegister(req, res, next) {
    try {
        const { username, email, password } = req.body;

        const isUserAlreadyExist = await authModel.findOne({
            $or: [
                {username},
                {email}
            ]
        });
        if(isUserAlreadyExist) {
            return res.status(409).json({
                message: "User alredy exist"
            })
        };
        const hashPassword = crypto.createHash("sha256").update(password).digest("hex");

        const user = await authModel.create({
            username,
            email,
            password: hashPassword
        });

        return res.status(201).json({
            status: "Success",
            message: "User registered succesfully",
            data: {
                id: user._id,
                username: user.username,
                email: user.email,
                verified: user.verified
            }
        })
    } catch (error) {
        next(error);
    }
}

async function userLogin(req, res, next) {
    try {
        const { username, email, password } = req.body;

        const user = await authModel.findOne({
            $or: [
                {username},
                {email}
            ]
        });

        if(!user) {
            return res.status(404).json({
                message: "User not found"
            })
        };
        // if(!user.verified) {
        //     return res.status(401).json({
        //         message: "Email not verified"
        //     })
        // }

        const hashPassword = crypto.createHash("sha256").update(password).digest("hex");
        const isValidPaasword = hashPassword == user.password;

        if(!isValidPaasword) {
            return res.status(401).json({
                message: "Invalid credentials"
            })
        };
        const refreshToken = await jwt.sign({id: user._id}, config.JWT_SECRET, { expiresIn: "7d" });
        const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");

        const session = await sessionModel.create({
            userId: user._id,
            refreshTokenHash: refreshTokenHash,
            ipAddress: req.ip,
            userAgent: req.headers["user-agent"],
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });
        const accessToken = await jwt.sign({id: user._id, session_id: session._id}, config.JWT_SECRET, { expiresIn: "15m" });

        res.status(200).json({
            status: "Success",
            message: "User logged in successfully",
            data: {
                id: user._id,
                username: user.username,
                email: user.email,
                verified: user.verified
            },
            token: accessToken
        })

    } catch (error) {
        next(error);
    }
};

async function getMe(req, res, next) {
    try {
        const user = await authModel.findById(req.user.id);

        return res.status(200).json({
            status: "Success",
            message: "Data fetched successfully",
            data: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })
    } catch (error) {
        next(error);
    }
};

async function refreshToken(req, res, next) {
    try {
        const refreshToken = req.cookies.refreshToken;

        if(!refreshToken) {
            return res.status(400).json({
                status: "error",
                message: "Refresh token not found"
            })
        }
        const decoded = await jwt.verify(refreshToken, config.JWT_SECRET);
        console.log(decoded, "decodeddecoded");
        const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");

        const session = await sessionModel.findOne({
            refreshTokenHash,
            revoked: false
        });
        if(!session) {
            return res.status(401).json({
                message: "Invalid refresh token"
            })
        }

        const newrefreshToken = await jwt.sign({id: decoded.id}, config.JWT_SECRET, { expiresIn: "7d" });
        const newrefreshTokenHash = crypto.createHash("sha256").update(newrefreshToken).digest("hex");

        res.cookie("refreshToken", newrefreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        session.refreshTokenHash = newrefreshTokenHash;

        await session.save();

        const accessToken = await jwt.sign({id: decoded.id, session_id: session._id}, config.JWT_SECRET, { expiresIn: "15m" })
        return res.status(200).json({
            status: "Success",
            message: "New access token generated successfully",
            token: accessToken
        })
    } catch (error) {
        next(error);
    }
}

export { userRegister, userLogin, getMe, refreshToken };