const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CourseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    major: {
        type: String,
        required: true
    }
});

module.exports = Course = mongoose.model('course', CourseSchema);