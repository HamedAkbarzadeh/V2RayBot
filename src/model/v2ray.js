import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    type: {
        type: String,
        enum: ["SINGLE_CONFIG", "GROUP_CONFIG"],
        required: true,
        default: "SINGLE_CONFIG"
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"]
    },
    price: {
        type: Number,
        default: null
    },
    link: {
        type: String,
        required: true,
    },
    speed: {
        type: String,
        default: null,
    },
    region: {
        type: String,
        default: null,
    },
    usersUsed: {
        type: Number,
        default: 0,
    },
    netVolume: {
        type: String,
        default: 0,
    },
    expired_at: {
        type: Date,
        default: null,
    },
}, { timestamps: true });

export default mongoose.model("V2ray", schema);
