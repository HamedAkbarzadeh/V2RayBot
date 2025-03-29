const { Schema, default: mongoose } = require("mongoose")

const schema = new Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    v2ray_id: {
        type: mongoose.Types.ObjectId,
        ref: "V2ray"
    },
    payment_id: {
        type: mongoose.Types.ObjectId,
        ref: "Payment"
    },
    nick_name: {
        type: String,
        default: null
    },
    netVolume: {
        type: Number,
        default: 0
    },
    start_at: {
        type: Date,
        default: null,
    },
    expired_at: {
        type: Date,
        default: null,
    },
    status: {
        type: String,
        enum: ["PENDING", "ACCEPT", "DRAFT"],
        default: "PENDING"
    }
});

export default mongoose.model("V2rayGroup", schema);
