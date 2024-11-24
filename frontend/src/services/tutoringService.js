import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tutorings';

export const getTutorings = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.tutorings;
  } catch (error) {
    console.error("Error fetching tutorings:", error);
    throw error;
  }
};

export const createTutoring = async (tutoringData) => {
  try {
    const response = await axios.post(API_URL, tutoringData);
    return response.data.tutoring;
  } catch (error) {
    console.error("Error creating tutoring:", error);
    throw error;
  }
};
