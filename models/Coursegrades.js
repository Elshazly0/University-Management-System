const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CoursegradesSchema = mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    CourseName: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    }
});

module.exports = Coursegrades = mongoose.model('Coursegrades', CoursegradesSchema);