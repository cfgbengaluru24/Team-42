import React from 'react';
import { Bar } from 'react-chartjs-2';

const StudentCard = ({ student, onClose }) => {
    const attendanceColor = student.grade >= 'B' ? 'rgba(75, 192, 192, 0.6)' : 'rgba(255, 99, 132, 0.6)';

    const data = {
        labels: ['Grade'],
        datasets: [
            {
                label: 'Grade',
                data: [parseInt(student.grade.replace(/[^\d.-]/g, ''))],
                backgroundColor: attendanceColor,
            },
        ],
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-96">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-700">
                    &times;
                </button>
                <h3 className="text-2xl font-bold mb-4">{student.name}</h3>
                <p className="mb-4"><strong>Timeline:</strong> {student.timeline}</p>
                <p className="mb-4"><strong>Grade:</strong> {student.grade}</p>
                <Bar data={data} />
            </div>
        </div>
    );
};

export default StudentCard;
