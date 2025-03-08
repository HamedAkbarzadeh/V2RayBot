const { Schema, default: mongoose } = require("mongoose");

const schema = new Schema({
    userID: {
        type: String,
        required: true,
        unique: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        default: null,
    },
    username: {
        type: String,
        default: null,
    },
    mobile: {
        type: String,
        default: null,
    },
    email: {
        type: String,
        default: null,
    },
    step: {
        type: String,
        default: "home",
    },
    invite_link: {
        type: String,
        default: null,
    },
    invite_by_user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    isBanned: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const model = mongoose.model("User", schema);

module.exports = model;