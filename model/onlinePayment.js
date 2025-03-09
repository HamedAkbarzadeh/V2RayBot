const { Schema, default: mongoose } = require("mongoose");

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

const model = mongoose.model("V2ray", schema);

module.exports = model;