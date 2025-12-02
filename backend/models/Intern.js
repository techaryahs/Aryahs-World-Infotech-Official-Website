import mongoose from "mongoose";

const InternSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    degree: { type: String, required: true },
    graduationYear: { type: String, required: true },
    location: { type: String, required: true },
    role: { type: String, required: true },
    resumeUrl: { type: String, required: true }, // Cloud storage or local path
  },
  { timestamps: true }
);

export default mongoose.model("InternApplication", InternSchema);
