const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema ({
        name: {
            type: String,
            required: true,
        }
    }
);

mondule.exports = mongoose.model("Category", CategorySchema);