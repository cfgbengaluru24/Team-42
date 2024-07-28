import User from "../models/user.model.js";
import Student from "../models/student.model.js";

export const createBrief = async (req, res) => {
  try {
    const volunteer = User.findById(req.user);

    if (!volunteer || !volunteer.assignedStudent) {
      return res.status(400).json({ message: "No assigned student found" });
    }

    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ message: "Brief content is required" });
    }

    const student = await Student.findById(volunteer.assignedStudent);

    if (!student) {
      return res.status(400).json({ message: "Assigned student not found" });
    }

    const newBrief = {
      date: new Date(),
      content,
    };

    student.lastBrief.push(newBrief);
    student.lastVolunteer = volunteer._id;

    await student.save();

    res
      .status(200)
      .json({ message: "Brief created successfully", brief: newBrief });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const getBriefs = async (req, res) => {
  try {
    const student = await Student.findById(req.user.assignedStudent);

    if (!student) {
      return res.status(400).json({ message: "Assigned student not found" });
    }

    res.status(200).json({ briefs: student.lastBrief });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
