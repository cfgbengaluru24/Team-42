import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

import dbConnect from "./db/dbConnect.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/users.routes.js";
import volunteerRoutes from "./routes/volunteer.routes.js";
import leaderRoutes from "./routes/leader.routes.js";
import { student_details } from "./controllers/student_details.js";
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(express.json());
app.use(cookieParser()); //this is used to access the cookies to verify the user
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/volunteers", volunteerRoutes);
app.use("/api/leader", leaderRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
  res.status(201).json({ message: "Registration successful" });
});


  // Validate and process the data (e.g., hash the password, save to database)
  // ...

  
app.listen(PORT, () => {
  dbConnect();
  console.log(`Server is running on port`, PORT);
});
