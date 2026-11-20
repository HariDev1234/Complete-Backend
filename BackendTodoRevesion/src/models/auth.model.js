import mongoose from "mongoose"

const authSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "user name is required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    role: {
        type: String,
        required: true,
        default: "user"
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

const authModel = mongoose.model("user", authSchema);

export default authModel;
