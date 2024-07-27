import mongoose from "mongoose";
import User from "./path_to_your_user_model"; // Adjust the path as necessary

const SubjectSchema = new mongoose.Schema({
  subject_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const TimeSlotSchema = new mongoose.Schema({
  start: {
    type: String,
    enum: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"],
    required: true
  },
  end: {
    type: String,
    enum: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
    required: true
  }
});

const AvailabilitySchema = new mongoose.Schema({
  day: {
    type: String,
    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    required: true
  },
  time_slots: [TimeSlotSchema]
});

const AssignedStudentSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  subject_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

// Create the Volunteer schema as a discriminator of User
const Volunteer = User.discriminator('Volunteer', new mongoose.Schema({
  volunteer_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  subjects: [SubjectSchema],
  availability: [AvailabilitySchema],
  assigned_students: [AssignedStudentSchema]
}));

export default Volunteer;
