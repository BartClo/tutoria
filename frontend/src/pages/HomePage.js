import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Bienvenido a la Aplicación de Tutorías</h1>
            <nav>
                <ul>
                    <li><Link to="/students">Ver Estudiantes</Link></li>
                    <li><Link to="/tutors">Ver Tutores</Link></li>
                    <li><Link to="/tutorias">Ver Tutorías</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default HomePage;
