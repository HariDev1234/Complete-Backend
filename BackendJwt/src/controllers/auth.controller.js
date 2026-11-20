const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
    const { user_name, mobile, email, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({
        email
    });

    if(isUserAlreadyExist) {
        return res.status(409).json({
            message: "User alredy exist"
        })
    }
    const user = await userModel.create({
       user_name, mobile, email, password
    });

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY)

    res.cookie("token", token)
    return res.status(201).json({
        message: "User registered successfully",
        user
    })

}

module.exports = { registerUser }