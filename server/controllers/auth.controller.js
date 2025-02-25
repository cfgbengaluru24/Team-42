import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      const isPasswordCorrect = bcrypt.compareSync(password, user.password);
      if (isPasswordCorrect) {
        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
          _id: user._id,
          username: user.username,
          role: user.role,
          email: user.email,
          subjects: user.subjects,
          availability: user.availability,
          assignedStudent: user.assignedStudent,
        });
      } else {
        return res.status(400).json({ error: "Invalid credentials" });
      }
    } else {
      return res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (req, res) => {
  try {
    const { username, password, role, email } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    } else {
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(password, salt);
      const newUser = new User({
        username,
        password: hash,
        role,
        email: email,
      });

      if (newUser) {
        generateTokenAndSetCookie(newUser._id, res);
        await newUser.save();
        res.status(201).json({
          _id: newUser._id,
          username: newUser.username,
          role,
          email: email,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log(error);
  }
};
