// src/Profile.js

import React, { useState } from "react";
import Select from "react-select";
import { useAuthContext } from "../../context/AuthContext";
const Profile = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [expertise, setExpertise] = useState([]);

  const user = useAuthContext();
  const userId = user.authUser._id;
  const timeOptions = [
    { value: "3.00 pm", label: "3.00 pm" },
    { value: "4.00 pm", label: "4.00 pm" },
    { value: "6.00 pm", label: "6.00 pm" },
    { value: "7.00 pm", label: "7.00 pm" },
  ];

  const dayOptions = [
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
    { value: "Saturday", label: "Saturday" },
    { value: "Sunday", label: "Sunday" },
  ];

  const subjectOptions = [
    { value: "Math", label: "Math" },
    { value: "Science", label: "Science" },
    { value: "English", label: "English" },
    { value: "History", label: "History" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const profileData = {
      name,
      phone,
      selectedDay,
      selectedTime,
      expertise: expertise.map((subject) => subject.value),
    };

    console.log(profileData);
    console.log(userId);
    try {
      const response = await fetch(
        "http://localhost:8000/api/volunteers/updateProfile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-user-id": userId,
          },
          body: JSON.stringify(profileData),
        }
      );

      if (response.ok) {
        console.log("Profile data submitted successfully");
        // Handle success (e.g., redirect to another page or show a success message)
      } else {
        console.log("Error submitting profile data");
        console.log(response);
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network error
    }
  };

  const handleExpertiseChange = (selectedOptions) => {
    setExpertise(selectedOptions);
  };

  const handleDayChange = (selectedOption) => {
    setSelectedDay(selectedOption);
  };

  const handleTimeChange = (selectedOption) => {
    setSelectedTime(selectedOption);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Complete Your Profile
        </h2>
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
            <label className="block text-gray-700">Preferred Day</label>
            <Select
              options={dayOptions}
              value={selectedDay}
              onChange={handleDayChange}
              placeholder="Select a day"
              isClearable
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Preferred Time Slot</label>
            <Select
              options={timeOptions}
              value={selectedTime}
              onChange={handleTimeChange}
              placeholder="Select a time slot"
              isClearable
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Subject Expertise</label>
            <Select
              options={subjectOptions}
              value={expertise}
              onChange={handleExpertiseChange}
              placeholder="Select subjects"
              isMulti
            />
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
