const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();
const connectDB = require('./config/db');

// Conectar a MongoDB
connectDB();

// Middleware para manejar las solicitudes JSON
app.use(express.json());

// Ruta para la raíz
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Tutores y Estudiantes');
});

// Importar las rutas
const studentRoutes = require('./routes/studentRoutes');
const tutorRoutes = require('./routes/tutorRoutes');
const tutoriaRoutes = require('./routes/tutoriaRoutes'); // Importamos las rutas de tutorías

// Usar las rutas
app.use('/api/students', studentRoutes);  // Ruta para estudiantes
app.use('/api/tutors', tutorRoutes);      // Ruta para tutores
app.use('/api/tutorias', tutoriaRoutes);  // Ruta para tutorías

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
