const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ApplySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nationalId: {
        type: Number,
        required: true
    },
    faculty: {
        type: String,
        required: true
    }
});

module.exports = applicant = mongoose.model('applicant', ApplySchema);