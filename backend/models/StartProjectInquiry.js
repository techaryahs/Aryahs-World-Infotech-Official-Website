import mongoose from "mongoose";

const projectInquirySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    company: {
      type: String,
      trim: true,
    },
    projectType: {
      type: String,
      required: true,
    },
    budgetRange: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const ProjectInquiry = mongoose.model("ProjectInquiry", projectInquirySchema);

export default ProjectInquiry;
