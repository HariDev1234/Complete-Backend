const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


async function registerUser(req, res) {
    const { user_name, email, password, role = "user" } = req.body;

    const isUserAlreadyExist = await userModel.findOne({
        $or: [
            {user_name}, 
            {email}]
    })

    if(isUserAlreadyExist) {
        return res.status(409).json({
            message: "User already exist"
        })
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        user_name, 
        email,
        password:hash, 
        role
    });
    const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_TOKEN_STRING);
    res.cookie("token", token);

    return res.status(201).json({
        message: "User registered successfully",
        user
    })
};

async function loginUser(req, res) {
    const { user_name, email, password } = req.body;

    const user = await userModel.findOne({
        $or: [
            {user_name},
            {email}
        ]
    });

    if(!user) {
        return res.status(401).json({
            message: "Invalid credentials"
        })
    };
    const isPasswordValid = bcrypt.compare(password, user.password);

    if(!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid credentials"
        })
    }

    const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_TOKEN_STRING);
    res.cookie("token", token)

    return res.status(200).json({
        message: "User logged successfully",
        user: {
            id: user._id,
            user_name: user.user_name,
            email: user.email,
            role: user.role
        }
    })

}

module.exports = { registerUser, loginUser }