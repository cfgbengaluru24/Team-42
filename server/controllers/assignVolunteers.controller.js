import Student from "../models/student.model.js";
import User from "../models/user.model.js";

// Helper function to check schedule overlap
function isScheduleMatching(studentSchedule, volunteerSlots) {
  // Log student schedule and volunteer slots for debugging
  console.log("Student Schedule:", studentSchedule);
  console.log("Volunteer Slots:", volunteerSlots);

  const matchingSlot = studentSchedule.some(schedule => {
    console.log(`Checking if student schedule '${schedule}' matches any volunteer slot...`);
    return volunteerSlots.some(slot => {
      console.log(`Comparing student schedule '${schedule}' with volunteer slot '${slot}'`);
      return slot.trim() === schedule.trim(); // Trim whitespace and ensure exact match
    });
  });

  console.log(`Is there a matching slot? ${matchingSlot}`);
  return matchingSlot;
}

export const assignVolunteers = async (req, res) => {
  try {
    const { studentId } = req.body;

    console.log("Received studentId:", studentId);

    // Validate the student ID format
    if (!/^[0-9a-fA-F]{24}$/.test(studentId)) {
      console.error("Invalid student ID format");
      return res.status(400).json({ error: "Invalid student ID format" });
    }

    // Find the student
    const student = await Student.findById(studentId);
    if (!student) {
      console.error(`Student not found with ID: ${studentId}`);
      return res.status(404).json({ error: "Student not found" });
    }

    console.log("Student found:", student);

    // Get the student's schedule in the correct format
    const studentSchedule = student.schedule.map((s) => `${s.day} ${s.Slot}`);

    // **New Code Start**
    // Fetch and print schedules of all students for debugging
    const allStudents = await Student.find();
    console.log("Printing all students' schedules for debugging:");
    allStudents.forEach((student) => {
      const schedule = student.schedule.map((s) => `${s.day} ${s.Slot}`);
      console.log(
        `Student ID: ${student._id}, Name: ${
          student.name
        }, Schedule: ${schedule.join(", ")}`
      );
    });
    // **New Code End**

    // Find available volunteers
    const availableVolunteers = await User.find({
      role: "volunteer",
      subjects: { $in: student.schedule.map(s => s.subject) }, // Match subjects
      slots: { $exists: true } // Ensure slots exist
    });

    console.log("Available volunteers count:", availableVolunteers.length);

    // Filter volunteers based on schedule
    const eligibleVolunteers = availableVolunteers.filter(volunteer => {
      console.log("Evaluating volunteer:", volunteer.username);
      console.log("Volunteer Slots:", volunteer.slots); // Log volunteer slots
      return isScheduleMatching(studentSchedule, volunteer.slots);
    });

    console.log("Eligible volunteers count:", eligibleVolunteers.length);

    if (eligibleVolunteers.length === 0) {
      return res.status(404).json({ error: "No matching volunteer found" });
    }

    // Randomly select a volunteer
    const selectedVolunteer =
      eligibleVolunteers[Math.floor(Math.random() * eligibleVolunteers.length)];

    // Assign the selected volunteer to the student
    student.assignedVolunteer = selectedVolunteer._id;
    selectedVolunteer.assignedStudent = student._id;

    User.findByIdAndUpdate(selectedVolunteer._id, {
      assignedStudent: student._id,
    });
    await student.save();
    await selectedVolunteer.save();

    res.status(200).json({
      message: "Volunteer assigned successfully",
      student: {
        id: student._id,
        name: student.name,
        assignedVolunteer: selectedVolunteer._id,
      },
      volunteer: {
        id: selectedVolunteer._id,
        username: selectedVolunteer.username,
        assignedStudent: student._id,
      },
    });
  } catch (error) {
    console.error("Error matching student with volunteer:", error);
    res.status(500).json({ error: "An error occurred during matching" });
  }
};
