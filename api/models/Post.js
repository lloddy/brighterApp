const mongoose = require('mongoose');
import Comment from './Comment'

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
        comment: Comment
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);