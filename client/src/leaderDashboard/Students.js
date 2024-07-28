import React, { useState, useEffect } from 'react';
import StudentCard from './StudentCard';

const Students = () => {
    const [timeline, setTimeline] = useState(''); // State to store the selected timeline
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        // Fetch the student list from the API when the component mounts
        setLoading(true);
        fetch('http://localhost:8000/api/leader/student-details') // Replace with your API endpoint
            .then(response => response.json())
            .then(data => {
                setStudents(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching student data:', error);
                setLoading(false);
            });
    }, []);

    const handleTimelineChange = (event) => {
        const selectedTimeline = event.target.value;
        setTimeline(selectedTimeline);
        setLoading(true);
        // Simulate API call with dummy data
        setTimeout(() => {
            const filteredStudents = students.filter(
                (student) => student.timeline.toLowerCase() === selectedTimeline.toLowerCase()
            );
            setStudents(filteredStudents);
            setLoading(false);
        }, 500);
    };

    const handleStudentClick = (student) => {
        setSelectedStudent(student);
    };

    const closeCard = () => {
        setSelectedStudent(null);
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center p-6 flex flex-col items-center"
            style={{ backgroundImage: `url('/volunteer.PNG')` }}
        >
            <div className="glass-effect p-6 rounded-lg shadow-lg flex flex-col items-center w-full max-w-4xl bg-white bg-opacity-40">
                <h1 className="text-xl font-bold mb-4">Students</h1>
                <h2 className="text-xl font-bold mb-4">Timeline: {timeline}</h2>
                <select
                    value={timeline}
                    onChange={handleTimelineChange}
                    className="block w-64 p-2 mb-4 border rounded text-center bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out"
                >
                    <option value="" className="text-gray-500">Select a Timeline</option>
                    {['3:00 PM', '4:00 PM', '6:00 PM', '7:00 PM'].map((item, index) => (
                        <option
                            key={index}
                            value={item}
                            className="text-gray-900 bg-white hover:bg-indigo-100 transition duration-200 ease-in-out"
                        >
                            {item}
                        </option>
                    ))}
                </select>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="flex flex-col items-center space-y-4">
                        {students.length > 0 ? (
                            students.map((student, index) => (
                                <div
                                    key={index}
                                    className="p-4 bg-gray-800 bg-opacity-50 text-white rounded cursor-pointer text-center w-64"
                                    onClick={() => handleStudentClick(student)}
                                >
                                    {student.name}
                                </div>
                            ))
                        ) : (
                            <p className="font-bold text-center">No students found for this timeline.</p>
                        )}
                    </div>
                )}
                {selectedStudent && <StudentCard student={selectedStudent} onClose={closeCard} />}
            </div>
        </div>
    );
};

export default Students;
