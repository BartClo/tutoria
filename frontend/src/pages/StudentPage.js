import React, { useEffect, useState } from 'react';
import { getStudents } from '../services/studentService';
import StudentCard from '../components/StudentCard';

const StudentPage = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const data = await getStudents();
                setStudents(data.students);
            } catch (error) {
                console.error('Error al obtener estudiantes', error);
            }
        };

        fetchStudents();
    }, []);

    return (
        <div>
            <h2>Estudiantes</h2>
            {students.map(student => (
                <StudentCard key={student._id} student={student} />
            ))}
        </div>
    );
};

export default StudentPage;
