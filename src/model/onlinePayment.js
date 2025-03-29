import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    payment_id: {
        type: mongoose.Types.ObjectId,
        ref: "Payment"
    },
    gatewayName: {
        type: String,
        required: true,
    },
    firstResponse: {
        type: String,
        required: true,
    },
    secondResponse: {
        type: String,
        required: true,
    },
    trans_id: {
        type: String,
        required: true
    },
    gatewayStatus: {
        //status from gateway
        type: String,
        default: null
    },
}, { timestamps: true });

export default mongoose.model("V2ray", schema);
