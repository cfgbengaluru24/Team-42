import mongoose from "mongoose";
const { Schema } = mongoose;

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    schedule: {
      type: [{ subject: String, day: String, Slot: String }],
    },
    assignedVolunteer: { type: Schema.Types.ObjectId, ref: "User" },
    lastVolunteer: { type: Schema.Types.ObjectId, ref: "User" },
    lastBrief: {
      type: [{ date: Date, content: String }],
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);
export default Student;
