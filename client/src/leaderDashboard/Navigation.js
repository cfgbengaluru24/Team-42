import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex items-center relative">
                <li className="mr-6">
                    <Link to="/volunteers" className="text-white hover:text-gray-400">Volunteers</Link>
                </li>
                <li className="mr-6">
                    <Link to="/students" className="text-white hover:text-gray-400">Students</Link>
                </li>
                <div className="absolute left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold">
                    Leader Dashboard
                </div>
                <li className="ml-auto">
                    <Link to="/logout" className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">Logout</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
