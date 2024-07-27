// src/Profile.js

import React, { useState } from 'react';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [timeSlots, setTimeSlots] = useState([]);
  const [expertise, setExpertise] = useState([]);
  
  const timeOptions = ['3.00 pm','4.00pm', '6.00pm', '7.00pm'];
  const subjectOptions = ['Math', 'Science', 'English', 'History'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const profileData = { name, email, phone, timeSlots, expertise };
    console.log(profileData);
    // You can send profileData to the server here
  };

  const handleTimeSlotChange = (e) => {
    const value = e.target.value;
    setTimeSlots((prev) =>
      prev.includes(value) ? prev.filter((slot) => slot !== value) : [...prev, value]
    );
  };

  const handleExpertiseChange = (e) => {
    const value = e.target.value;
    setExpertise((prev) =>
      prev.includes(value) ? prev.filter((subject) => subject !== value) : [...prev, value]
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Complete Your Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Preferred Time Slots</label>
            {timeOptions.map((time) => (
              <div key={time} className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value={time}
                    checked={timeSlots.includes(time)}
                    onChange={handleTimeSlotChange}
                  />
                  <span className="ml-2">{time}</span>
                </label>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Subject Expertise</label>
            {subjectOptions.map((subject) => (
              <div key={subject} className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value={subject}
                    checked={expertise.includes(subject)}
                    onChange={handleExpertiseChange}
                  />
                  <span className="ml-2">{subject}</span>
                </label>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Save and Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
