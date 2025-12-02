import StartProjectInquiry from "../models/StartProjectInquiry.js";
import { sendMail } from "../utils/sendMail.js";

export const createProjectInquiry = async (req, res) => {
  try {
    const newInquiry = new StartProjectInquiry(req.body);
    await newInquiry.save();

    const { fullName, email, phone,company, projectType, budgetRange, description } = req.body;

    /* ------------------------------------
       1️⃣  EMAIL TO COMPANY (ARYAHS TEAM)
    -------------------------------------*/
    await sendMail({
      to: "tech.aryahs@gmail.com",
      subject: "🚀 New Project Inquiry Received",
      html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color:#2E86C1;">📩 New Project Inquiry</h2>
        <p>You have received a new project inquiry on Aryahs World Infotech.</p>

        <div style="background:#f4f6f7; padding:15px; border-radius:8px; margin-top:20px;">
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Budget:</strong> ${budgetRange}</p>
          <p><strong>Message:</strong> ${description || "No message provided"}</p>
        </div>

        <p style="margin-top:20px;">🔔 Please follow up with the client at your earliest convenience.</p>
      </div>`
    });

    /* ------------------------------------
       2️⃣  EMAIL TO CLIENT (THANK YOU)
    -------------------------------------*/
    await sendMail({
      to: email,
      subject: "Thank You for Your Project Inquiry – Aryahs World Infotech",
      html: `
      <div style="font-family: Arial, sans-serif; padding: 25px; background:#fafafa;">
        <div style="max-width:600px; margin:auto; background:white; padding:30px; border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
          
          <h2 style="color:#2E86C1; text-align:center;">Thank You for Reaching Out! 👋</h2>
          <p style="text-align:center; font-size:16px; color:#555;">
            Hi <strong>${fullName}</strong>, thank you for submitting your project inquiry.
          </p>

          <p style="font-size:15px; color:#555;">
            Our team at <strong>Aryahs World Infotech (OPC) Pvt Ltd</strong> has received your request and 
            we will get back to you within <strong>12–24 hours</strong>.
          </p>

          <h3 style="color:#2E86C1; margin-top:25px;">📌 Your Inquiry Summary</h3>
          <div style="background:#f4f6f7; padding:15px; border-radius:8px;">
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Budget:</strong> ${budgetRange}</p>
            <p><strong>Message:</strong> ${description || "No message provided"}</p>
          </div>

          <p style="margin-top:20px; font-size:15px; color:#555;">
            If you want to share more details, feel free to reply directly to this email.
          </p>

          <hr style="margin:25px 0;">

          <p style="text-align:center; color:#777;">
            © ${new Date().getFullYear()} Aryahs World Infotech (OPC) Pvt Ltd  
            <br/>Building Modern Digital Experiences 🚀
          </p>
        </div>
      </div>`
    });

    res.status(201).json({
      success: true,
      message: "Project Inquiry Submitted and Emails Sent!"
    });

  } catch (error) {
    console.log("❌ Inquiry Error:", error);
    res.status(500).json({ success: false, message: "Error", error });
  }
};
