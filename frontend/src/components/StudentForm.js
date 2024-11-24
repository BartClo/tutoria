import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createStudent } from '../services/studentService';

const StudentForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',

        },
        validationSchema: Yup.object({
            name: Yup.string().required('El nombre es obligatorio'),
            email: Yup.string().email('Correo electrónico inválido').required('El correo es obligatorio'),
            password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),

        }),
        onSubmit: async (values) => {
            try {
                await createStudent(values);
                alert('Estudiante creado con éxito');
            } catch (error) {
                alert('Error al crear estudiante');
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <h2>Crear Estudiante</h2>
            <input
                type="text"
                placeholder="Nombre"
                {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}

            <input
                type="email"
                placeholder="Correo"
                {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}

            <input
                type="password"
                placeholder="Contraseña"
                {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}


            <button type="submit">Crear Estudiante</button>
        </form>
    );
};



export default StudentForm;
