import mongoose, { Schema } from "mongoose"

const schema = new Schema({
    v2ray: {
        type: Schema.Types.ObjectId,
        ref: "V2ray",
        required: true,
    },
    categoryAttribute: {
        type: Schema.Types.ObjectId,
        ref: "CategoryAttribute",
        required: true,
    },
    value: { type: String, required: true },
    priceIncrease: { type: Number, default: 0 },
    status: { type: String, enum: ["ENABLE", "DISABLE"], default: "ENABLE" },
}, {
    timestamps: true,
});

export default mongoose.model("CategoryValue", schema);
