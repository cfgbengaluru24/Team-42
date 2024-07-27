import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, backgroundSize: 'cover' }}>
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-2xl text-center max-w-md">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Welcome to the Volunteer Portal</h1>
        <p className="text-lg text-gray-600 mb-4">Empowering volunteers to make a difference, one student at a time.</p>
      </div>
    </div>
  );
};

export default Home;
