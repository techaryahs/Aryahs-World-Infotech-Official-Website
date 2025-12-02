import express from "express";
import {
  createContactMessage,
  getAllReviews
} from "../controllers/contactController.js";

const router = express.Router();

// CONTACT / REVIEW SUBMISSION
router.post("/", createContactMessage);          // Contact Form
router.post("/review", createContactMessage);    // Review / Rating Submission

// GET ALL REVIEWS
router.get("/reviews", getAllReviews);

export default router;
