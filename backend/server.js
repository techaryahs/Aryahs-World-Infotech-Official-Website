// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

import fs from "fs";
import multer from "multer";
import { google } from "googleapis";

import internRoutes from "./routes/internRoutes.js";
import startProjectRoute from "./routes/startprojectRoutes.js";
import ContactRoute from "./routes/contactRoutes.js";

import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

// ---------------------------------------------------------
// 🔥 CORS (Frontend on 3000 OR 3001)
// ---------------------------------------------------------
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

app.use(express.json());
app.use(compression());
app.use(helmet());
app.use(morgan("dev"));

// ---------------------------------------------------------
// Static uploads folder
// ---------------------------------------------------------
app.use("/uploads", express.static("uploads"));

// ---------------------------------------------------------
// 🔥 GOOGLE OAUTH CLIENT
// ---------------------------------------------------------
const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "http://localhost:5000/auth/google/callback"
);

// ---------------------------------------------------------
// 🔥 GOOGLE LOGIN
// ---------------------------------------------------------
app.get("/auth/google", (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: ["https://www.googleapis.com/auth/drive.file"],
  });

  res.redirect(url);
});

// ---------------------------------------------------------
// 🔥 GOOGLE CALLBACK
// ---------------------------------------------------------
app.get("/auth/google/callback", async (req, res) => {
  try {
    const { code } = req.query;

    const { tokens } = await oauth2Client.getToken(code);

    fs.writeFileSync("tokens.json", JSON.stringify(tokens));

    res.redirect("http://localhost:3001");
  } catch (err) {
    console.log(err);
    res.status(500).send("Google Auth failed");
  }
});

// ---------------------------------------------------------
// CHECK AUTH
// ---------------------------------------------------------
app.get("/check-auth", (req, res) => {
  const exists = fs.existsSync("tokens.json");
  res.json({ authenticated: exists });
});

// ---------------------------------------------------------
// 🔥 MULTER TEMP UPLOAD
// ---------------------------------------------------------
const upload = multer({ dest: "uploads/" });

// ---------------------------------------------------------
// 🔥 UPLOAD RESUME TO GOOGLE DRIVE (WITH APPLICANT NAME)
// ---------------------------------------------------------
app.post("/uploads", upload.single("resume"), async (req, res) => {
  try {
    if (!fs.existsSync("tokens.json")) {
      return res.status(401).json({ message: "Login with Google first!" });
    }

    const tokens = JSON.parse(fs.readFileSync("tokens.json"));
    oauth2Client.setCredentials(tokens);

    const drive = google.drive({ version: "v3", auth: oauth2Client });

    const file = req.file;
    const fullName = req.body.fullName || "Applicant";

    if (!file) {
      return res.status(400).json({ message: "No file received by server!" });
    }

    // Convert "Ankita Tiwari" → "Ankita-Tiwari"
    const safeName = fullName.replace(/\s+/g, "-");
    const finalFileName = `${safeName}-Resume.pdf`;

    // Upload to Drive
    const response = await drive.files.create({
      requestBody: {
        name: finalFileName,
        mimeType: file.mimetype,
        parents: ["1GL_Kq3gsNSEkwIQO_so_gx2Til-qQ3a6"], // your folder ID
      },
      media: {
        mimeType: file.mimetype,
        body: fs.createReadStream(file.path),
      },
    });

    // Make public
    await drive.permissions.create({
      fileId: response.data.id,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    fs.unlinkSync(file.path);

    res.json({
      success: true,
      fileId: response.data.id,
      fileName: finalFileName,
      message: "Uploaded to Drive!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// ---------------------------------------------------------
// API ROUTES
// ---------------------------------------------------------
app.use("/api/intern", internRoutes);
app.use("/api/inquiry", startProjectRoute);
app.use("/api/contact", ContactRoute);

// ---------------------------------------------------------
// FRONTEND DEPLOYMENT
// ---------------------------------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
  });
}

// ---------------------------------------------------------
// DEFAULT ROUTE
// ---------------------------------------------------------
app.get("/", (req, res) => {
  res.send("Backend is running ✔");
});

// ---------------------------------------------------------
// 404
// ---------------------------------------------------------
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ---------------------------------------------------------
// START SERVER
// ---------------------------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
