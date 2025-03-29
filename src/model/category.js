import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: false },
    status: { type: String, enum: ["ENABLE", "DISABLE"], default: "ENABLE" },
}, {
    timestamps: true,
});

export default mongoose.model("Category", schema);

