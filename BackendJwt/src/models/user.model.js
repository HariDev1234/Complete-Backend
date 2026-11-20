const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_name: String,
    mobile: String,
    email: {
        type: String,
        unquie: true
    },
    password: String
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;