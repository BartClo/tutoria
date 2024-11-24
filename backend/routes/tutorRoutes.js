const express = require('express');
const router = express.Router();
const Tutor = require('../models/tutorModel');

// Crear un nuevo tutor
router.post('/', async (req, res) => {
    const { name, email, password, university, subjects, availability } = req.body;

    if (!name || !email || !password || !university) {
        return res.status(400).json({ message: 'Faltan datos obligatorios' });
    }

    try {
        const newTutor = new Tutor({ name, email, password, university, subjects, availability });
        await newTutor.save();
        res.status(201).json({ message: 'Tutor creado', tutor: newTutor });
    } catch (error) {
        res.status(400).json({ message: 'Error al crear tutor', error: error.message });
    }
});

// Obtener todos los tutores
router.get('/', async (req, res) => {
    try {
        const tutors = await Tutor.find();
        res.status(200).json({ tutors });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener tutores', error: error.message });
    }
});

// Obtener un tutor por ID
router.get('/:id', async (req, res) => {
    try {
        const tutor = await Tutor.findById(req.params.id);
        if (!tutor) {
            return res.status(404).json({ message: 'Tutor no encontrado' });
        }
        res.status(200).json({ tutor });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener tutor', error: error.message });
    }
});

// Actualizar un tutor
router.put('/:id', async (req, res) => {
    try {
        const updatedTutor = await Tutor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTutor) {
            return res.status(404).json({ message: 'Tutor no encontrado' });
        }
        res.status(200).json({ message: 'Tutor actualizado', tutor: updatedTutor });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar tutor', error: error.message });
    }
});

// Eliminar un tutor
router.delete('/:id', async (req, res) => {
    try {
        const deletedTutor = await Tutor.findByIdAndDelete(req.params.id);
        if (!deletedTutor) {
            return res.status(404).json({ message: 'Tutor no encontrado' });
        }
        res.status(200).json({ message: 'Tutor eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar tutor', error: error.message });
    }
});

module.exports = router;
