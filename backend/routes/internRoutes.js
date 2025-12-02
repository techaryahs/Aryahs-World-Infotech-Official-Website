import express from "express";
import multer from "multer";
import { createInternApplication } from "../controllers/internController.js";

const router = express.Router();

// Parse multipart form data WITHOUT files
const parseForm = multer().none();

router.post("/apply", parseForm, createInternApplication);

export default router;
