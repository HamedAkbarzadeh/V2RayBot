import mongoose, { Schema } from "mongoose"

const schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    payment: {
        type: Schema.Types.ObjectId,
        ref: "Payment",
    },
    v2ray: {
        type: Schema.Types.ObjectId,
        ref: "V2ray",
        required: true,
    },
    commonDiscount: {
        type: Schema.Types.ObjectId,
        ref: "CommonDiscount"
    },
    AmazingDiscount: {
        type: Schema.Types.ObjectId,
        ref: "AmazingDiscount"
    },
    quantity: {
        type: Number,
        default: 1,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    totalDiscount: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ["PENDING", "COMPLETED", "CANCELLED"],
        default: "PENDING"
    },
}, {
    timestamps: true,
});

export default mongoose.model("Order", schema);