import React, { useState } from 'react';

const initialStudents = [
  { id: 1, name: 'Student 1', subject: 'Math', marks: 80, report: 'Good progress' },
  { id: 2, name: 'Student 2', subject: 'Science', marks: 75, report: 'Needs improvement in practicals' },
];

const initialActivities = [
  { id: 1, date: '2024-07-25', activity: 'Session with Student 1' },
  { id: 2, date: '2024-07-26', activity: 'Session with Student 2' },
];

const initialAttendance = {
  '2024-07-25': 'Present',
  '2024-07-26': 'Absent',
  '2024-07-27': 'Present',
  // Add more dates as needed
};

const Dashboard = () => {
  const [students, setStudents] = useState(initialStudents);
  const [activities, setActivities] = useState(initialActivities);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [notification, setNotification] = useState('');
  const [attendance, setAttendance] = useState(initialAttendance);
  const [newActivityBrief, setNewActivityBrief] = useState('');
  const [newActivityDescription, setNewActivityDescription] = useState('');

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedStudent({ ...selectedStudent, [name]: value });
  };

  const handleSave = () => {
    setStudents(students.map(s => s.id === selectedStudent.id ? selectedStudent : s));
    setSelectedStudent(null);
  };

  const handleNotification = (response) => {
    setNotification(`Invitation ${response}`);
  };

  const handleNewActivityDescriptionChange = (e) => {
    setNewActivityDescription(e.target.value);
  };

  const handleAddActivityBrief = () => {
    const newActivity = {
      id: activities.length + 1,
      date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      activity: newActivityDescription,
    };
    setActivities([...activities, newActivity]);
    setNewActivityDescription('');
  };

  // Calculate Attendance Percentage
  const calculateAttendancePercentage = () => {
    const totalDays = Object.keys(attendance).length;
    const presentDays = Object.values(attendance).filter(status => status === 'Present').length;
    return ((presentDays / totalDays) * 100).toFixed(2);
  };

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>

      {/* Recent Activities */}
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h3 className="text-lg font-semibold mb-2">Recent Activities</h3>
        <ul>
          {activities.map(activity => (
            <li key={activity.id} className="border-b py-2">
              {activity.date}: {activity.activity}
            </li>
          ))}
        </ul>
      </div>

      {/* Add Activity Brief */}
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h3 className="text-lg font-semibold mb-2">Add Activity Brief</h3>
        <input
          type="text"
          value={newActivityDescription}
          onChange={handleNewActivityDescriptionChange}
          className="w-full mt-2 p-2 border rounded-lg"
          placeholder="Describe the session"
        />
        <button
          onClick={handleAddActivityBrief}
          className="bg-blue-600 text-white p-2 rounded-lg mt-2"
        >
          Add Brief
        </button>
      </div>

      {/* Notifications */}
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h3 className="text-lg font-semibold mb-2">Notifications</h3>
        <p>{notification}</p>
        <button 
          onClick={() => handleNotification('Accepted')} 
          className="bg-green-600 text-white p-2 rounded mr-2"
        >
          Accept
        </button>
        <button 
          onClick={() => handleNotification('Declined')} 
          className="bg-red-600 text-white p-2 rounded"
        >
          Decline
        </button>
      </div>

      {/* Attendance */}
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h3 className="text-lg font-semibold mb-2">Attendance</h3>
        <ul>
          {Object.entries(attendance).map(([date, status]) => (
            <li key={date} className="border-b py-2">
              {date}: {status}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <h4 className="text-lg font-semibold">Attendance Percentage</h4>
          <p className="text-2xl font-bold">{calculateAttendancePercentage()}%</p>
        </div>
      </div>

      {/* Students List */}
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h3 className="text-lg font-semibold mb-2">Students List</h3>
        <ul>
          {students.map(student => (
            <li 
              key={student.id} 
              className="cursor-pointer border-b py-2"
              onClick={() => handleStudentClick(student)}
            >
              {student.name} - {student.subject}
            </li>
          ))}
        </ul>
      </div>

      {/* Student Details */}
      {selectedStudent && (
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Edit Student: {selectedStudent.name}</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Marks</label>
            <input
              type="number"
              name="marks"
              value={selectedStudent.marks}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Report</label>
            <textarea
              name="report"
              value={selectedStudent.report}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded-lg"
            ></textarea>
          </div>
          <button 
            onClick={handleSave} 
            className="bg-blue-600 text-white p-2 rounded-lg"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
