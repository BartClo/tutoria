import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tutors';

export const getTutors = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.tutors;
  } catch (error) {
    console.error("Error fetching tutors:", error);
    throw error;
  }
};

export const createTutor = async (tutorData) => {
  try {
    const response = await axios.post(API_URL, tutorData);
    return response.data.tutor;
  } catch (error) {
    console.error("Error creating tutor:", error);
    throw error;
  }
};
