import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { assignVolunteers } from "../controllers/assignVolunteers.controller.js";
const router = express.Router();

router.post("/assignVolunteers", protectRoute, assignVolunteers);

export default router;
