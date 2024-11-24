import React, { useState } from 'react';
import { createTutoring } from '../services/tutoringService';

const TutorReservation = ({ tutorId }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tutoringData = { tutorId, date, time };
    try {
      await createTutoring(tutoringData);
      alert('Tutoring reserved successfully!');
    } catch (error) {
      console.error('Error reserving tutoring:', error);
      alert('Error reserving tutoring');
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md w-96 mx-auto">
      <h3 className="text-xl font-semibold mb-4">Reserve a Tutoring Session</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Select Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Select Time</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Confirm Reservation
        </button>
      </form>
    </div>
  );
};

export default TutorReservation;
