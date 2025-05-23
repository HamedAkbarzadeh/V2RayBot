import mongoose, { Schema } from "mongoose"

const schema = new Schema({
    order: {
        type: Schema.Types.ObjectId,
        ref: "Order"
    },
    v2ray: {
        type: Schema.Types.ObjectId,
        ref: "V2ray"
    },
    amazingDiscount: {
        type: Schema.Types.ObjectId,
        ref: "AmazingDiscount",
        required: false,
    },
    commonDiscount: {
        type: Schema.Types.ObjectId,
        ref: "CommonDiscount",
        required: false,
    },
}, {
    timestamps: true,
});
export default mongoose.model("OrderItemSelectedAttribute", schema);