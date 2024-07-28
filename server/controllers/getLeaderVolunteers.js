import User from "../models/user.model.js";

export const getLeaderVolunteers = async (req, res) => {
  try {
    const { leaderId } = req.body;

    if (!leaderId) {
      return res.status(400).json({ message: "Leader ID is required" });
    }

    // Find the leader by ID and populate the assigned volunteers
    const leader = await User.findById(leaderId).populate({
      path: 'assignedVolunteers',
      select: 'username fullname email subjects availability', // Select fields to return
    });

    if (!leader) {
      return res.status(404).json({ message: "Leader not found" });
    }

    if (leader.role !== 'leader') {
      return res.status(400).json({ message: "User is not a leader" });
    }

    // Return the leader's assigned volunteers
    res.status(200).json({ leaderId: leader._id, assignedVolunteers: leader.assignedVolunteers });
  } catch (error) {
    console.error('Error fetching leader volunteers:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
