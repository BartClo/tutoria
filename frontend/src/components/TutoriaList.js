import React, { useEffect, useState } from 'react';
import { getTutorias } from '../services/tutoriaService';

const TutoriaList = () => {
    const [tutorias, setTutorias] = useState([]);

    useEffect(() => {
        const fetchTutorias = async () => {
            try {
                const data = await getTutorias();
                setTutorias(data.tutorias);
            } catch (error) {
                console.error('Error al obtener tutorías', error);
            }
        };

        fetchTutorias();
    }, []);

    return (
        <div>
            <h2>Tutorías</h2>
            <ul>
                {tutorias.map((tutoria) => (
                    <li key={tutoria._id}>
                        <p>Estudiante: {tutoria.student.name}</p>
                        <p>Tutor: {tutoria.tutor.name}</p>
                        <p>Fecha: {new Date(tutoria.date).toLocaleString()}</p>
                        <p>Estado: {tutoria.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TutoriaList;
