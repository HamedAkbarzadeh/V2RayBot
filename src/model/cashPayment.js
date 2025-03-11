const { Schema, default: mongoose } = require("mongoose");

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

const model = mongoose.model("V2ray", schema);

module.exports = model;