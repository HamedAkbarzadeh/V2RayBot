const { Schema, default: mongoose } = require("mongoose")

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    v2ray_id: [{
        type: mongoose.Types.ObjectId,
        ref: 'V2ray'
    }],
    userCount: {
        type: Number,
        defult: 0
    },
    netVolume: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"]
    }
});

const model = mongoose.model("V2rayGroup", schema);

module.exports = model;