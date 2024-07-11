const mongoose = require('mongoose');

const textSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    translatedText: {
        type: String,
    },
});

module.exports = mongoose.model('Text', textSchema)