const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel'); // Asegúrate de que el modelo esté bien importado

// Crear un nuevo estudiante
router.post('/', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        const newStudent = new Student({ name, email, password });
        await newStudent.save();
        res.status(201).json({ message: 'Estudiante creado', student: newStudent });
    } catch (error) {
        res.status(400).json({ message: 'Error al crear estudiante', error: error.message });
    }
});
// Obtener todos los estudiantes
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({ students });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener estudiantes', error: error.message });
    }
});

// Obtener un estudiante por ID
router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Estudiante no encontrado' });
        }
        res.status(200).json({ student });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener estudiante', error: error.message });
    }
});

// Actualizar un estudiante
router.put('/:id', async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedStudent) {
            return res.status(404).json({ message: 'Estudiante no encontrado' });
        }
        res.status(200).json({ message: 'Estudiante actualizado', student: updatedStudent });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar estudiante', error: error.message });
    }
});

// Eliminar un estudiante
router.delete('/:id', async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        if (!deletedStudent) {
            return res.status(404).json({ message: 'Estudiante no encontrado' });
        }
        res.status(200).json({ message: 'Estudiante eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar estudiante', error: error.message });
    }
});

module.exports = router;
