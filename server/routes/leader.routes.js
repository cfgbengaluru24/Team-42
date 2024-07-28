import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { student_details } from "../controllers/student_details.js";
import { getLeaderVolunteers } from "../controllers/getLeaderVolunteers.js";
import { assignVolunteers } from "../controllers/assignVolunteers.controller.js";

const router = express.Router();

router.post("/assignVolunteers", protectRoute, assignVolunteers);
router.post("/student-details", protectRoute, student_details);
router.post("/leader-volunteers", protectRoute, getLeaderVolunteers);
export default router;
