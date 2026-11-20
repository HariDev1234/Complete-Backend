const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
    user_name: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    role: {
        type: String,
    },
    password: {
        type: String,
        require: true
    }
});

const authModel = mongoose.model("user", authSchema);

module.exports = authModel;