import express from "express";
import { createContactMessage,getAllReviews } from "../controllers/contactController.js";

const router = express.Router();

// POST /api/contact
router.post("/", createContactMessage);

// GET route (for fetching reviews)
router.get("/", getAllReviews);

export default router;
