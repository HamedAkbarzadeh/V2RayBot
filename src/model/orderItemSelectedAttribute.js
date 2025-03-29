import mongoose, { Schema } from "mongoose"

const schema = new Schema({
    orderItem: {
        type: Schema.Types.ObjectId,
        ref: "OrderItem",
        required: true,
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
}, {
    timestamps: true,
});
export default mongoose.model("OrderItemSelectedAttribute", schema);