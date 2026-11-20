import authModel from "../models/auth.model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import config from "../config/config.js";

async function userRegister(req, res, next) {
    try {
        const { username, email, password, role = "user" } = req.body;

        const isUserExist = await authModel.findOne({
            $or: [
                {username},
                {email}
            ]
        });
        if(isUserExist) {
            return res.status(401).json({
                status: "error",
                message: "User already exist"
            })
        };
        const hashPassword = await bcrypt.hash(password, 12);

        const user = await authModel.create({
            username: username,
            email: email,
            password: hashPassword,
            role: role
        });

        res.status(201).json({
            status: "success",
            message: "User registered successfully",
            data: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        })
    } catch(error) {
        next(error);
    }
};

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
                status: "error",
                message: "Unauthorized"
            });
        };
        const passwordCheck = await bcrypt.compare(password, user.password);
        if(!passwordCheck) {
            return res.status(401).json({
                status: "error",
                message: "Unauthorized"
            });
        };
        const refreshToken = await jwt.sign({id: user._id, role: user.role}, config.JWT_TOKEN_STRING, {expiresIn: "7d"});
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        const token = await jwt.sign({id: user._id, role: user.role}, config.JWT_TOKEN_STRING, {expiresIn: "15m"});

        return res.status(200).json({
            status: "success",
            message: "User logged successfully",
            data: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            },
            token: token
        })
    } catch(error) {
        next(error);
    }
}

export { userRegister, login };