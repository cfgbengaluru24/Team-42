import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { assignVolunteers } from "../controllers/assignVolunteers.controller.js";
import { createStudent } from "../controllers/createStudent.controllers.js";

const router = express.Router();

router.post("/assignVolunteers", protectRoute, assignVolunteers);
router.post("/student/create", protectRoute, createStudent);
export default router;
