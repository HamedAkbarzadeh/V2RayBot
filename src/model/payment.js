import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    price: {
        type: Number,
        default: null
    },
    type: {
        type: String,
        enum: ["CARDTOCARD", "GATEWAY"],
    },
    status: {
        type: String,
        enum: ["ACCEPT", "IMPOSSIBLE"],
    },
}, { timestamps: true });

export default mongoose.model("V2ray", schema);
