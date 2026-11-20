import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    refreshTokenHash: {
        type: String,
        required: true
    },
    ipAddress: {
        type: String,
        required: true
    },
    userAgent: {
        type: String,
        required: true
    },
    revoked: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const sessionModel = mongoose.model("session", sessionSchema);

export default sessionModel;