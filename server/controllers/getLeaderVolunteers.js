import User from "../models/user.model.js";

export const getLeaderVolunteers = async (req, res) => {
  try {
    const { leaderId, subject } = req.body;

    if (!leaderId) {
      return res.status(400).json({ message: "Leader ID is required" });
    }

    if (!subject) {
      return res.status(400).json({ message: "Subject is required" });
    }

    // Find the leader by ID
    const leader = await User.findById(leaderId).populate({
      path: 'assignedVolunteers',
      select: 'username fullname email subjects availability',
    });

    if (!leader) {
      return res.status(404).json({ message: "Leader not found" });
    }

    if (leader.role !== 'leader') {
      return res.status(400).json({ message: "User is not a leader" });
    }

    // Filter the assigned volunteers by subject
    const filteredVolunteers = leader.assignedVolunteers.filter(volunteer =>
      volunteer.subjects.includes(subject)
    );

    // Return the filtered list of volunteers
    res.status(200).json({ leaderId: leader._id, assignedVolunteers: filteredVolunteers });
  } catch (error) {
    console.error('Error fetching leader volunteers:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
