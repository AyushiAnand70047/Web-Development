// import mongoose
const mongoose = require("mongoose");

// route handler
const commentsSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post" // this is reference to post model
    },
    user: {
        type: String,
        require: true
    },
    body: {
        type: String,
        required: true
    }
});

// export
module.exports = mongoose.model("Comment",commentsSchema);