const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
    {
        noteID: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        detail: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    });

module.exports = mongoose.model('noteSchema', noteSchema, 'notes');