import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { updateProfile } from "../controllers/profile.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsers);
router.post("/updateProfile", protectRoute, updateProfile);
export default router;
