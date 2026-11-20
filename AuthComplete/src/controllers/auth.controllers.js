import authModel from "../models/auth.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config.js"


async function registerUser(req, res, next) {
    try {
        const { username, email, password } = req.body;

        const isUserExists = await authModel.findOne({
            $or: [
                { username },
                { email }
            ]
        });

        if (isUserExists) {
            return res.status(409).json({
                status: "error",
                message: "Username or email already exists"
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await authModel.create({
            username,
            email,
            password: hashedPassword
        });

        const token = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: "1d" });
        const refreshToken = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: "7d" });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        return res.status(201).json({
            status: "success",
            message: "User registered successfully",
            data: {
                id: user._id,
                username: user.username,
                email: user.email
            },
            token
        })

    } catch (error) {
        next(error);
    }
}

async function loginUser(req, res, next) {
    try {
        const { email, password } = req.body;
        const user = await authModel.findOne({ email });

        if(!user) {
            return res.status(401).json({
                status: "error",
                message: "Invalid email or password"
            });
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword) {
            return res.status(401).json({
                status: "error",
                message: "Invalid email or password"
            });
        }
        const refreshToken = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: "7d" });
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });
        const token = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: "15m" });

        return res.status(200).json({
            status: "success",
            message: "User logged in successfully",
            data: {
                id: user._id,
                username: user.username,
                email: user.email
            },
            token
        })

    } catch (error) {
        next(error);
    }
}

async function getMe(req, res, next) {
    try {
        const token = req.headers?.authorization?.split(" ")[1];
        if(!token) {
            return res.status(401).json({
                status: "error",
                message: "Unauthorized"
            });
        }

        const decoded = jwt.verify(token, config.JWT_SECRET);
        const user = await authModel.findById(decoded.id);
        if(!user) {
            return res.status(404).json({
                status: "error",
                message: "User not found"
            });
        }
        return res.status(200).json({
            status: "success",
            data: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        next(error);
    }
}

async function refreshToken(req, res, next) {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.status(401).json({
                status: "error",
                message: "Unauthorized",
            })
        }
        const decoded = jwt.verify(refreshToken, config.JWT_SECRET);
        const user = await authModel.findById(decoded.id);
        if (!user) {
            return res.status(404).json({
                status: "error",
                message: "User not found"
            });
        }
        const newRefreshToken = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: "7d" });
        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });
        
        const newToken = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: "15m" });

        return res.status(200).json({
            status: "success",
            token: newToken
        });
    } catch (error) {
        next(error);
    }
}

export { registerUser, loginUser, getMe, refreshToken };
