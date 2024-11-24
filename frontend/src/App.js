import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudentPage from './pages/StudentPage';
import TutorPage from './pages/TutorPage';
import TutoriaPage from './pages/TutoriaPage';
import StudentForm from './components/StudentForm';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/students" element={<StudentPage />} />
                <Route path="/tutors" element={<TutorPage />} />
                <Route path="/tutorias" element={<TutoriaPage />} />
                <Route path="/create-student" element={<StudentForm />} />
            </Routes>
        </Router>
    );
};

export default App;
