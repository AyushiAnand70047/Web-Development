// import mongoose
const mongoose = require("mongoose");

// route handler
const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post" // this is reference to post model
    },
    user: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

// export
module.exports = mongoose.model("Comment", commentSchema);
