const mongoose = require('mongoose')

const Student = new mongoose.Schema({
    fullName: String,
    email: String,
    faculty: String,
    birthDate: Date,
    grades: [{ date: Date, grade: Number }]
})

module.exports = mongoose.model('students', Student)

