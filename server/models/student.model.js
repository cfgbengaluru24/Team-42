import mongoose from "mongoose";
const { Schema } = mongoose;

const studentSchema = new Schema(
  {
    student_ID: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    assignedVolunteer: { type: Schema.Types.ObjectId, ref: "User" }, // Reference to a Volunteer
    lastBrief: {
      type: [{ date: Date, content: String }],
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);
export default Student;
