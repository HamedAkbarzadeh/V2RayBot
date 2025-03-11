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
        enum: ["SPECIAL_CONFIG", "GROUP_CONFIG", "FREE_CONFIG"],
        required: true,
        default: "SPECIAL_CONFIG"
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
        type: Number,
        default: 0,
    },
    expired_at: {
        type: Date,
        default: null,
    },
}, { timestamps: true });

const model = mongoose.model("V2ray", schema);

module.exports = model;