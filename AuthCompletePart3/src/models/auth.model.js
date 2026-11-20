import mongoose, { mongo } from "mongoose";


const authSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "User name required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email id is required"],
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });


const authModel = mongoose.model("user", authSchema);

export default authModel;

