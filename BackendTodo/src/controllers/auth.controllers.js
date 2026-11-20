const authModel = require("../models/auth.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function userRegister(req, res) {

    const { user_name, email, role = "user", password } = req.body;

    const isUserExist = await authModel.findOne({
        $or: [
            {user_name},
            {email}
        ]
    });
    
    if(isUserExist) {
        return res.status(409).json({
            message: "User already exist"
        })
    };
    const hash = await bcrypt.hash(password, 10);

    const user = await authModel.create({
        user_name,
        email,
        role,
        password: hash
    });

    return res.status(201).json({
        message: "User registed successfully",
        data: {
            id: user._id,
            user_name: user.user_name,
            email: user.email
        }
    })
};

async function userLogin(req, res) {
    const { user_name, email, password } = req.body;

    const user = await authModel.findOne({
        $or: [
            {user_name},
            {email}
        ]
    });
    if(!user) {
        return res.status(401).json({
            message: "Unauthorized user"
        })
    }
    const isPassword = await bcrypt.compare(password, user.password);
    if(!isPassword) {
        return res.status(401).json({
            message: "Unauthorized user"
        })
    }
    const token = await jwt.sign({id: user._id, role: user.role}, process.env.JWT_CONNECT_STRING);
    res.cookie("token", token);

    return res.status(200).json({
        message: "User logged successfully",
        data: {
            id: user._id,
            user_name: user.user_name,
            email: user.email
        }
    })
}

module.exports = { userRegister, userLogin };