import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    channelID: {
        type: String,
        required: true
    },
    channelName: {
        type: String,
        defualt: null
    },
    owner_id: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    expired_at: {
        type: Date,
        default: null
    },
    status: {
        type: String,
        enum: ["ENABLE", "DISABLE"],
        default: "ENABLE"
    },
    type: {
        type: String,
        enum: ["CHANNEL", "GROUP", "BOT"],
        default: "CHANNEL"
    }
}, { timestamps: true });

export default mongoose.model("V2ray", schema);
