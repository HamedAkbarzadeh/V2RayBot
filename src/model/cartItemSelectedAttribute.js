import mongoose, { Schema } from "mongoose"

const schema = new Schema({
    cartItem: {
        type: Schema.Types.ObjectId,
        ref: "CartItem",
    },
    categoryAttribute: {
        type: Schema.Types.ObjectId,
        ref: "CategoryAttribute",
        required: true,
    },
    categoryValue: {
        type: Schema.Types.ObjectId,
        ref: "CategoryValue",
        required: true,
    },
    value: {
        type: String,
        required: false,
    },
}, { timestamps: true });

export default mongoose.model("CartItemSelectedAttribute", schema);
