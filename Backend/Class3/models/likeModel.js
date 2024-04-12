const mongoose = require("mongoose");

const likeSchema = ({
    post: {
        type: mongoose.Schema.Types.ObjectId
    },
    user: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Like",likeSchema);