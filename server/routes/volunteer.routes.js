import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { updateProfile } from "../controllers/profile.controller.js";

import { createBrief } from "../controllers/briefs.controller.js";

const router = express.Router();

router.post("/updateProfile", protectRoute, updateProfile);
router.post("/createBrief", protectRoute, createBrief);
export default router;
