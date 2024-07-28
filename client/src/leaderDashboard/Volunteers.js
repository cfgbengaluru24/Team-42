import React, { useState, useEffect } from 'react';
import VolunteerCard from './VolunteerCard';

const Volunteers = () => {
    const [subject, setSubject] = useState(''); // State to store the selected subject
    const [volunteers, setVolunteers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedVolunteer, setSelectedVolunteer] = useState(null);

    useEffect(() => {
        // Fetch the volunteer list from the API when the component mounts
        setLoading(true);
        fetch('http://localhost:8000/api/leader/student-details') // Replace with your API endpoint
            .then(response => response.json())
            .then(data => {
                setVolunteers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching volunteer data:', error);
                setLoading(false);
            });
    }, []);

    const subjects = ['Math', 'English', 'History', 'Science', 'Social Science'];

    const handleSubjectChange = (event) => {
        const selectedSubject = event.target.value;
        setSubject(selectedSubject);
        setLoading(true);
        // Simulate API call with dummy data
        setTimeout(() => {
            const filteredVolunteers = volunteers.filter(
                (volunteer) => volunteer.subject.toLowerCase() === selectedSubject.toLowerCase()
            );
            setVolunteers(filteredVolunteers);
            setLoading(false);
        }, 500);
    };

    const handleVolunteerClick = (volunteer) => {
        setSelectedVolunteer(volunteer);
    };

    const closeCard = () => {
        setSelectedVolunteer(null);
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center p-6 flex flex-col items-center"
            style={{ backgroundImage: `url('/volunteer.PNG')` }}
        >
            <div className="glass-effect p-6 rounded-lg shadow-lg flex flex-col items-center w-full max-w-4xl bg-white bg-opacity-40">
                <h1 className="text-xl font-bold mb-4">Volunteers</h1>
                <h2 className="text-xl font-bold mb-4">Subject: {subject}</h2>
                <select
                    value={subject}
                    onChange={handleSubjectChange}
                    className="block w-64 p-2 mb-4 border rounded text-center"
                >
                    <option value="">Select a Subject</option>
                    {subjects.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="flex flex-col items-center space-y-4">
                        {volunteers.length > 0 ? (
                            volunteers.map((volunteer, index) => (
                                <div
                                    key={index}
                                    className="p-4 bg-gray-800 bg-opacity-50 text-white rounded cursor-pointer text-center w-64"
                                    onClick={() => handleVolunteerClick(volunteer)}
                                >
                                    {volunteer.name}
                                </div>
                            ))
                        ) : (
                            <p className="font-bold text-center">No volunteers found for this subject.</p>
                        )}
                    </div>
                )}
                {selectedVolunteer && <VolunteerCard volunteer={selectedVolunteer} onClose={closeCard} />}
            </div>
        </div>
    );
};

export default Volunteers;
