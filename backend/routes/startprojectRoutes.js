// routes/startProject.js
import express from "express";
import { createProjectInquiry } from "../controllers/startProject.js";

const router = express.Router();

// POST /api/inquiry
router.post("/", createProjectInquiry);

export default router;
