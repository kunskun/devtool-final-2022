const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    course: {
        type: String,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    branch: {
        type: String,
    },
    semester: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    note: {
        type: String
    },
    admitRound: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("courses", courseSchema);