const { Schema, default: mongoose } = require("mongoose");

const schema = new Schema({
    name: {
        type: String,
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
    usersCountUsed: {
        type: Number,
        default: 0,
    },
    netVolume: {
        type: Number,
        default: 0,
    },
    region: {
        type: String,
        default: null,
    },
    expired_at: {
        type: Date,
        default: null,
    },
}, { timestamps: true });

const model = mongoose.model("V2ray", schema);

module.exports = model;