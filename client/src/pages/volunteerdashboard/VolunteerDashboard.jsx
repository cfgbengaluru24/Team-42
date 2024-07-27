// src/VolunteerDashboard.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const VolunteerDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Volunteer Dashboard</h1>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="dashboard" className="mr-4">Dashboard</Link>
          <Link to="schedule" className="mr-4">Schedule</Link>
          <Link to="profile" className="mr-4">Profile</Link>
          <Link to="/" className="bg-red-500 px-3 py-1 rounded">Logout</Link>
        </nav>
      </header>
      <main className="flex-grow p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default VolunteerDashboard;
