import axios from 'axios';

const API_URL = 'http://localhost:5000/api/students';

export const createStudent = async (studentData) => {
    try {
        const response = await axios.post(API_URL, studentData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getStudents = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
