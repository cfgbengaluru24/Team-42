import User from "../models/user.model.js";

export const updateProfile = async (req, res) => {
  try {
    const { fullname, day, slot, subjects } = req.body;
    const userId = req.user._id;

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (fullname) user.fullname = fullname;

    // Handle day and slot update
    if (day && slot) {
      const existingSlotIndex = user.slot.findIndex(
        (s) => s.day === day && s.slot === slot
      );
      if (existingSlotIndex === -1) {
        user.slot.push({ day, slot });
      } else {
        user.slot[existingSlotIndex] = { day, slot };
      }
    }

    // Update subjects
    if (subjects && Array.isArray(subjects)) {
      user.subjects = subjects;
    }

    await user.save();
    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the profile" });
  }
};
