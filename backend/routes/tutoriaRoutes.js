const express = require('express');
const router = express.Router();
const Tutoria = require('../models/tutoriaModel');
const Student = require('../models/studentModel');
const Tutor = require('../models/tutorModel');

// Crear una nueva tutoría
router.post('/', async (req, res) => {
    try {
        const { studentId, tutorId, date, status } = req.body;

        // Validar si el estudiante y el tutor existen
        const student = await Student.findById(studentId);
        const tutor = await Tutor.findById(tutorId);

        if (!student) {
            return res.status(404).json({ message: 'Estudiante no encontrado' });
        }

        if (!tutor) {
            return res.status(404).json({ message: 'Tutor no encontrado' });
        }

        // Crear la tutoría
        const newTutoria = new Tutoria({
            student: studentId,
            tutor: tutorId,
            date,
            status,
        });

        await newTutoria.save();
        res.status(201).json({ message: 'Tutoría creada', tutoria: newTutoria });
    } catch (error) {
        res.status(400).json({ message: 'Error al crear tutoría', error: error.message });
    }
});

// Obtener todas las tutorías de un estudiante
router.get('/student/:studentId', async (req, res) => {
    try {
        const tutorias = await Tutoria.find({ student: req.params.studentId })
            .populate('tutor', 'name email') // Populamos los datos del tutor
            .populate('student', 'name email'); // Populamos los datos del estudiante
        res.status(200).json({ tutorias });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener tutorías', error: error.message });
    }
});

// Obtener todas las tutorías de un tutor
router.get('/tutor/:tutorId', async (req, res) => {
    try {
        const tutorias = await Tutoria.find({ tutor: req.params.tutorId })
            .populate('tutor', 'name email') // Populamos los datos del tutor
            .populate('student', 'name email'); // Populamos los datos del estudiante
        res.status(200).json({ tutorias });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener tutorías', error: error.message });
    }
});

// Actualizar el estado de una tutoría
router.put('/:id', async (req, res) => {
    try {
        const { status } = req.body;

        if (!['Pendiente', 'Confirmada', 'Completada'].includes(status)) {
            return res.status(400).json({ message: 'Estado inválido' });
        }

        const updatedTutoria = await Tutoria.findByIdAndUpdate(req.params.id, { status }, { new: true });

        if (!updatedTutoria) {
            return res.status(404).json({ message: 'Tutoría no encontrada' });
        }

        res.status(200).json({ message: 'Estado de tutoría actualizado', tutoria: updatedTutoria });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar estado', error: error.message });
    }
});

// Eliminar una tutoría
router.delete('/:id', async (req, res) => {
    try {
        const deletedTutoria = await Tutoria.findByIdAndDelete(req.params.id);

        if (!deletedTutoria) {
            return res.status(404).json({ message: 'Tutoría no encontrada' });
        }

        res.status(200).json({ message: 'Tutoría eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar tutoría', error: error.message });
    }
});

module.exports = router;
