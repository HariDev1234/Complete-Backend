const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        require: true,
        unqiue: true
    },
    email: {
        type: String,
        require: String,
        unqiue: String
    },
    password: {
        type: String,
        require: String,
        unqiue: String
    },
    role: {
        type: String,
        enum: ["user", "artist"],
        require: true
    }

});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;