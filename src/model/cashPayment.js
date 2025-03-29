import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    receipt_image: {
        type: String,
        required: true
    },
    payment_id: {
        type: mongoose.Types.ObjectId,
        ref: "Payment"
    }
}, { timestamps: true });

export default mongoose.model("V2ray", schema);
