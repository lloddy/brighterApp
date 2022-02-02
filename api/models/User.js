const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema ({
        username: {
            type: String,
            requried: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profilePic: {
            type: String,
            default: "",
        },
    },
    { timestamps: true }
);

mondule.exports = mongoose.model("User", UserSchema);