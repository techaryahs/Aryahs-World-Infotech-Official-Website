import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import inquiryRoutes from "./routes/startprojectRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import connectDB from "./config/db.js"; // ✅ Import DB connection

// Load environment variables
dotenv.config();

// ✅ Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/inquiry", inquiryRoutes);
app.use("/api/contact", contactRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("✅ Aryahs World Backend with MongoDB is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
