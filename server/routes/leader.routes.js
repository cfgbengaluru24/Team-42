import express from "express";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/assignVolunteers", protectRoute, assignVolunteers);

export default router;
