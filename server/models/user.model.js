import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "volunteer", "leader", "admin"],
    },
    // New fields for volunteer details
    slots: [{ type: String }], // e.g., ["Monday 10-12", "Wednesday 2-4"]
    subjects: [{ type: String }], // e.g., ["Math", "Science"]
    availability: {
      // Assuming a simple array of time slots
      type: [{ day: String, startTime: String, endTime: String }],
    },
    assignedStudent: { type: Schema.Types.ObjectId, ref: "Student" }, // Reference to a Student model

    //For leaders
    assignedVolunteers: [{ type: Schema.Types.ObjectId, ref: "User" }], // References to other volunteers
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
