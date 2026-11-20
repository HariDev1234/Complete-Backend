const authModel = require("../models/auth.model");


async function getUserList(req, res) {
    
    const userList = await authModel.find().select("user_name email role");

    return res.status(200).json({
        message: "User fetched successfully",
        data: userList
    })
};

async function getUserByRole(req, res) {
    const { role } = req.params;

    const users = await authModel.find({role: role});

    return res.status(200).json({
        message: "Data fetched successfully",
        data: users
    })
}

async function getUserById(req, res) {
    const { id } = req.params;

    const user = await authModel.findById(id).select("-password -__v");

    return res.status(200).json({
        message: "Data fetched successfully",
        data: user
    });
}

module.exports = { getUserList, getUserByRole, getUserById };