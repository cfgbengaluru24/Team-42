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
      required: true, // Assuming email should be required
      unique: true, // Assuming email should be unique
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "volunteer", "leader", "admin"],
    },
  },
  { timestamps: true } // Added missing comma here
);

const User = mongoose.model("User", userSchema);
export default User;
