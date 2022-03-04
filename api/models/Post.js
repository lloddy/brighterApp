const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    comments: String
});

const PostSchema = new mongoose.Schema ({
        title: {
            type: String,
            required: true,
            unique: true,
        },
        desc: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: false,
        },
        username: {
            type: String,
            required: true,
        },
        categories: {
            type: Array,
            require: false,
        },
        comments: [CommentSchema]
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);