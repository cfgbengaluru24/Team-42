import User from "../models/user.model";

export const getStudent = async (req, res) => {
  try {
    const student = await User.findById(req.user);
    if (student) {
      res.status(200).json(student);
      console.log(student);
    } else {
      res.status(404).json({ error: "Student not found" });
    }
  } catch (error) {
    console.error("Error getting student:", error);
    res
      .status(500)
      .json({ error: "An error occurred while getting the student" });
  }
};
