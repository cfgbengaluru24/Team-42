import React from 'react';
import AttendanceChart from './AttendanceChart';

const VolunteerCard = ({ volunteer, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                <button
                    className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-900"
                    onClick={onClose}
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-4">{volunteer.name}</h2>
                <p className="mb-2">
                    <span className="font-bold">Subject:</span> {volunteer.subject}
                </p>
                <p className="mb-2">
                    <span className="font-bold">Timeline:</span> {volunteer.timeline}
                </p>
                <div className="mb-4">
                    <AttendanceChart attendance={parseFloat(volunteer.attendance)} />
                </div>
                <p className="text-gray-600"><span className="font-bold">Attendance: </span>{volunteer.attendance}</p>
            </div>
        </div>
    );
};

export default VolunteerCard;
