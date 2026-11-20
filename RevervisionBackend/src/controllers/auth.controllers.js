import authModel from "../models/auth.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

async function register(req, res, next) {
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
        };
        const passwordHash = await bcrypt.hash(password, 12);

        const user = await authModel.create({
            username,
            email,
            password:passwordHash
        });

        res.status(201).json({
            status: "Success",
            message: 'User registered successully',
            data: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })

    } catch(error) {
        next(error);
    }
}

async function login(req, res, next) {
    try {
        const { username, email, password } = req.body;

        const user = await authModel.findOne({
            $or: [
                {username},
                {email}
            ]
        });
        if(!user) {
            return res.status(401).json({
                status: "Error",
                message: "User not found"
            })
        };
        const comparePassword = await bcrypt.compare(password, user.password);
        if(!comparePassword) {
            return res.status(401).json({
                status: "Error",
                message: "Invalid credential"
            })
        };
        const refreshToken = await jwt.sign({id: user._id}, config.JWT_TOKEN_STRING, {expiresIn: "7d"});
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        const token = await jwt.sign({id: user._id}, config.JWT_TOKEN_STRING, {expiresIn: "15m"});

        res.status(200).json({
            status: "success",
            message: "User logged successully",
            data: {
                id: user._id,
                username: user.username,
                email: user.email
            },
            token: token
        })

    } catch(error) {
        next(error)
    }
};

async function getMe(req, res, next) {
    try {
        const user = await authModel.findById(req.user.id);
        if(!user) {
            return res.status(401).json({
                status: "error",
                message: "User not found"
            });
        }

        res.status(200).json({
            status: "success",
            message: "User fetched successfully",
            data: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })
    } catch(error) {
        next(error)
    } 
};

async function refreshToken(req, res, next) {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) {
            return res.status(401).json({
                status: "error",
                message: "Unauthorized"
            })
        };
        const verifyRefreshToken = await jwt.verify(refreshToken, config.JWT_TOKEN_STRING);
        if(!verifyRefreshToken) {
            return res.status(401).json({
                status: "error",
                message: "Unauthorized"
            })
        };
        const user = await authModel.findById(verifyRefreshToken.id);
        if(!user) {
            return res.status(401).json({
                status: "error",
                message: "User not found"
            })
        }
        const newRefreshToken = await jwt.sign({id: user.id}, config.JWT_TOKEN_STRING, {expiresIn: "7d"});
        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        const token = await jwt.sign({id: user.id}, config.JWT_TOKEN_STRING, {expiresIn: "15m"});

        res.status(200).json({
            status: "success",
            message: "Token created successfully",
            token
        })
    } catch(error) {
        next(error);
    }
}
export {register, login, getMe, refreshToken}