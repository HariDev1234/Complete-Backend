import authModel from "../models/auth.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import config from "../config/config.js";
import sessionModel from "../models/session.model.js";
import * as emailUtils from "../utils/utils.js";
import otpModel from "../models/otp.model.js";
import { sendEmail } from "../services/email.service.js";


async function userRegister(req, res, next) {
    try {
        const { username, email, password } = req.body;

        const isUserExist = await authModel.findOne({
            $or: [
                {username},
                {email}
            ]
        });

        if(isUserExist) {
            return res.status(409).json({
                message: "User already exist"
            })
        }
        const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");

        const user = await authModel.create({
            username,
            email,
            password: hashedPassword
        });

        const otp = emailUtils.otpGenerator();
        const html = emailUtils.getOtpHtml(otp);

        const otpHash = crypto.createHash("sha256").update(otp).digest("hex");

        await otpModel.create({
            email,
            userId: user._id,
            otpHash
        })
        await sendEmail(email, "Your email verification OTP", `Your OTP code is ${otp}`, html);

        return res.status(201).json({
            message: "User registered successfully",
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
};

async function userLogin(req, res, next) {
    try {
        const { email, password } = req.body;

        const user = await authModel.findOne({ email });

        if(!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        if(!user.verified) {
            return res.status(401).json({
                message: "Email not verified"
            })
        }
        const hashedPassword = crypto.createHash("sha256 ").update(password).digest("hex");

        if(user.password !== hashedPassword) {
            return res.status(401).json({
                message: "Invalid credentials"
            })
        }

        const refreshToken = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: "7d" });

        const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");

        const session = await sessionModel.create({
            userId: user._id,
            refreshToken: refreshTokenHash,
            ipAddress: req.ip,
            userAgent: req.headers["user-agent"]
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        const token = jwt.sign({ id: user._id, session_id: session._id }, config.JWT_SECRET, { expiresIn: "15m" });

        return res.status(200).json({
            message: "User logged in successfully",
            data: {
                id: user._id,
                username: user.username,
                email: user.email,  
            },
            token
        })

    } catch (error) {
        next(error);
    }
};

async function getMe(req, res, next) {

    try {
        const user = await authModel.findById(req.user.id).select("-password");

        if(!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        return res.status(200).json({
            message: "User fetched successfully",
            data: user
        })
    } catch (error) {
        next(error);
    }
}

async function logout(req, res, next) {
    try {
        const refreshToken = req.cookies.refreshToken;

        if(!refreshToken) {
            return res.status(400).json({
                message: "Refresh token not found"
            })
        };

        const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");
        const session = await sessionModel.findOne({
            refreshToken: refreshTokenHash,
            revoked: false
        });

        if(!session) {
            return res.status(400).json({
                message: "Invalid refresh token"
            })
        }

        session.revoked = true;

        await session.save();
        res.clearCookie("refreshToken");

        res.status(200).json({
            message: "User logged out successfully"
        }) 
    } catch (error) {
        next(error);
    }
}

async function logoutAll(req, res, next) {
    try {
        const userId = req.user.id;

        await sessionModel.updateMany(
            { userId, revoked: false },
            {revoked: true}
        )

        return res.status(200).json({
            message: "User logged out from all device successfully",
        })
    } catch (error) {
        next(error);
    }
}

async function refreshToken(req, res, next) {
    try {
        const refreshToken = req.cookies.refreshToken;

        if(!refreshToken) {
            return res.status(400).json({
                message: "Refresh token not found"
            })
        }
        const decoded = await jwt.verify(refreshToken, config.JWT_SECRET);

        const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");

        const session = await sessionModel.findOne({
            refreshToken: refreshTokenHash,
            revoked: false
        });

        if(!session) {
            return res.status(401).json({
                message: "Invalid refresh token"
            })
        }
        const token = await jwt.sign({id: decoded.id, session_id: decoded.session_id}, config.JWT_SECRET, {expiresIn: "15m"});
        const newrefreshToken = await jwt.sign({id: decoded.id}, config.JWT_SECRET, { expiresIn: "7d" })

        const newrefreshTokenHashh = crypto.createHash("sha256").update(newrefreshToken).digest("hex");

        res.cookie("refreshToken", newrefreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        })

        session.refreshToken = newrefreshTokenHashh;

        await session.save();

        res.status(200).json({
            status: "success",
            message: "Access token refreshed successfully",
            token: token
        });

    } catch (error) {
        next(error);
    }
}

async function verifyEmail(req, res, next) {
    try {
        const { email, otp } = req.body;

        const otpHash = crypto.createHash("sha256").update(otp).digest("hex");
        const otpDetails = await otpModel.findOne({email, otpHash});

        if(!otpDetails) {
            return res.status(400).json({
                message: "Invalid OTP"
            })
        }

        const user = await authModel.findByIdAndUpdate(otpDetails.userId, 
            { verified: true }
        ).select("-password");

        await otpModel.deleteMany({
            userId: otpDetails.userId
        });

        res.status(200).json({
            message: "Email verified successfully",
            data: user
        })

    } catch (error) {
        next(error);
    }
}

                                                                      
export { userRegister, userLogin, getMe, logout, refreshToken, logoutAll, verifyEmail };