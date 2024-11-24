const mongoose = require('mongoose');

const tutoriaSchema = mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    },
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tutor',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['Pendiente', 'Confirmada', 'Completada'],
        default: 'Pendiente',
    },
}, {
    timestamps: true,
});

const Tutoria = mongoose.model('Tutoria', tutoriaSchema);

module.exports = Tutoria;
