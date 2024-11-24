const mongoose = require('mongoose');

const tutorSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
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
        university: {
            type: String,
            required: true,
        },
        faculty: String,
        career: String,
        subjects: [String],
        availability: [
            {
                day: String, // Ejemplo: 'Monday'
                times: [String], // Ejemplo: ['10:00 AM', '2:00 PM']
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Tutor = mongoose.model('Tutor', tutorSchema);

module.exports = Tutor;
