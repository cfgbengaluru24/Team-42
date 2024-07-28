import User from '../models/user.model.js'; // Adjust the path as per your project structure
import Student from '../models/student.model.js'; // Adjust the path as per your project structure

export const student_details = async (req, res) => {
  try {
    const { slot } = req.body;

    // Correcting the query to match the provided data structure
    const students = await Student.find({ 'schedule.Slot': slot })
      .populate('assignedVolunteer', 'username email')
      .populate('lastVolunteer', 'username email');

    const studentDetails = students.map(student => ({
      student_ID: student.student_ID,
      name: student.name,
      schedule: student.schedule,
      lastBrief: student.lastBrief,
      assignedVolunteer: student.assignedVolunteer ? {
        name: student.assignedVolunteer.username,
        email: student.assignedVolunteer.email
      } : null,
      lastVolunteer: student.lastVolunteer ? {
        name: student.lastVolunteer.username,
        email: student.lastVolunteer.email``
      } : null,
    }));

    res.status(200).json(studentDetails);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
