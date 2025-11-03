import express from "express";
import { createProjectInquiry } from "../controllers/startProject.js";

const router = express.Router();

router.post("/", createProjectInquiry);

export default router;
