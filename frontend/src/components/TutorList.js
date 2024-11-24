import React, { useState, useEffect } from 'react';
import { getTutors } from '../services/tutorService';

const TutorList = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const tutorsData = await getTutors();
        setTutors(tutorsData);
      } catch (error) {
        console.error('Error fetching tutors:', error);
      }
    };
    fetchTutors();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Tutors Available</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tutors.map((tutor) => (
          <div key={tutor._id} className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold">{tutor.name}</h3>
            <p className="text-gray-600">{tutor.university} - {tutor.faculty}</p>
            <p className="mt-2">{tutor.subjects.join(', ')}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Reserve</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorList;
