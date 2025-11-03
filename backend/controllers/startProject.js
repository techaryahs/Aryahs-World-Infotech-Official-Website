import ProjectInquiry from "../models/StartProjectInquiry.js";
import { sendMail } from "../utils/sendMail.js";

export const createProjectInquiry = async (req, res) => {
  try {
    const { fullName, email, company, projectType, budgetRange, description } = req.body;

    if (!fullName || !email || !projectType || !budgetRange) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    // Save inquiry in database
    const newInquiry = new ProjectInquiry({
      fullName,
      email,
      company,
      projectType,
      budgetRange,
      description,
    });

    await newInquiry.save();

    // ✅ Admin Email (to your company)
    const adminHtml = `
      <h2>🚀 New Project Inquiry Received</h2>
      <p><b>Name:</b> ${fullName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Company:</b> ${company || "N/A"}</p>
      <p><b>Project Type:</b> ${projectType}</p>
      <p><b>Budget Range:</b> ${budgetRange}</p>
      <p><b>Description:</b></p>
      <p>${description || "No description provided."}</p>
      <hr />
      <p style="color:#555;">🕐 Received on: ${new Date().toLocaleString()}</p>
    `;

    // ✅ Persuasive Client Email
    const userHtml = `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:auto;padding:20px;background:#f9f9f9;border-radius:12px;">
        <h2 style="color:#4f46e5;">Hey ${fullName},</h2>
        <p style="font-size:16px;color:#333;">
          Thank you for reaching out to <b>Aryahs World Infotech</b> 🚀<br/>
          We’re thrilled to know you’re interested in our <b>${projectType}</b> services!
        </p>
        
        <p style="font-size:16px;color:#333;">
          Our project specialists have received your request and are reviewing your requirements carefully.
          You can expect a detailed response from us within <b>the next 24 hours</b>.
        </p>

        <div style="background:#fff;padding:15px;border-radius:8px;margin:20px 0;border:1px solid #e0e0e0;">
          <p><b>Project Type:</b> ${projectType}</p>
          <p><b>Budget Range:</b> ${budgetRange}</p>
          <p><b>Description:</b> ${description || "No description provided."}</p>
        </div>

        <p style="font-size:16px;color:#333;">
          Our expert team can absolutely handle your project — from planning and development to deployment and long-term support.
        </p>

        <p style="font-size:16px;color:#333;">
          We’re confident that Aryahs World Infotech can deliver a <b>beautiful, fast, and scalable</b> solution tailored to your goals.
        </p>

        <p style="font-size:16px;color:#4f46e5;font-weight:bold;margin-top:15px;">
          Let’s bring your vision to life. We’ll get back to you very soon! 💼✨
        </p>

        <br/>
        <p style="font-size:14px;color:#555;">
          Warm regards,<br/>
          <b>The Aryahs World Infotech Team</b><br/>
          📧 tech.aryahs@gmail.com | 🌐 www.aryahsworldinfotech.com
        </p>
      </div>
    `;

    // Send to Admin
    await sendMail({
      to: process.env.ADMIN_EMAIL,
      subject: "🚀 New Project Inquiry Received",
      html: adminHtml,
    });

    // Send to Client
    await sendMail({
      to: email,
      subject: "✅ We’ve received your project inquiry — Aryahs World Infotech",
      html: userHtml,
    });

    // Respond to Frontend
    return res.status(201).json({
      success: true,
      message: "Inquiry saved and email notifications sent to both admin and client.",
      data: newInquiry,
    });
  } catch (error) {
    console.error("❌ Error saving project inquiry:", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Could not save inquiry.",
    });
  }
};
