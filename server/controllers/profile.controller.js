import User from "../models/user.model.js";

export const updateProfile = async (req, res) => {
  try {
    const { fullname, day, slot, subjects } = req.body;
    const userId = req.user._id;

    if (!fullname || !day || !slot || !subjects) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (fullname) user.fullname = fullname;
    if (day && slot) {
      user.slot.push({ day, slot });
    }
    if (subjects) user.subjects = subjects;

    await user.save();
    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the profile" });
  }
};
