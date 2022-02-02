const mongoose = require('mongoose');

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
        }
    },
    { timestamps: true }
);

mondule.exports = mongoose.model("Post", PostSchema);