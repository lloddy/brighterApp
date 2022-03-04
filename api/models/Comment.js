const mongoose = require('mongoose');
import User from './User';

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    comments: String
});

module.exports = mongoose.model('Comment', commentSchema);