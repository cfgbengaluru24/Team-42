import Student from "../models/student.model.js";
import mongoose, { mongo } from "mongoose";
export const createStudent = async (req, res) => {
  try {
    const { name, schedule, assignedVolunteer } = req.body;
    // const userId = req.user;
    // const userid_string = new mongoose.Types.ObjectId(userId);
    // console.log("String of id", userid_string);
    const student = new Student({
      name,
      schedule,
      assignedVolunteer,
    });
    await student.save();
    res.status(201).json({ message: "Student created successfully", student });
  } catch (error) {
    console.error("Error creating student:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the student" });
  }
};
