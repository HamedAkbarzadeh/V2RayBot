import mongoose, { Schema } from "mongoose"

const schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    unit: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
}, {
    timestamps: true,
});

export default mongoose.model("CategoryAttribute", schema);
