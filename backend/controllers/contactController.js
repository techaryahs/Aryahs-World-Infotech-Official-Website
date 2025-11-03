import ContactMessage from "../models/ContactMessage.js";
import { sendMail } from "../utils/sendMail.js";

export const createContactMessage = async (req, res) => {
  try {
    console.log("📩 Incoming review message:", req.body);

    const { fullName, name, email, phone, message } = req.body;
    const userName = fullName || name;

    if (!userName || !email || !message) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    // Save to MongoDB
    const newMessage = new ContactMessage({
      fullName: userName,
      email,
      phone,
      message,
    });

    await newMessage.save();
    console.log("✅ Saved review message:", newMessage);

    // 📨 Email to Admin
    const adminHtml = `
      <h2>🌟 New Review / Feedback Received</h2>
      <p><b>Name:</b> ${userName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || "N/A"}</p>
      <p><b>Feedback Message:</b></p>
      <blockquote style="border-left:4px solid #4f46e5;padding-left:10px;color:#333;">${message}</blockquote>
      <hr/>
      <p style="color:#555;">🕐 Received on: ${new Date().toLocaleString()}</p>
    `;

    // 💌 Thank-you Email to Reviewer
    const userHtml = `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:auto;padding:24px;background:#f9f9f9;border-radius:12px;">
        <h2 style="color:#4f46e5;">Hey ${userName},</h2>

        <p style="font-size:16px;color:#333;">
          We're absolutely <b>thrilled</b> to receive your feedback! 💜  
          Thank you for taking the time to share your thoughts with us.
        </p>

        <div style="background:#fff;padding:16px;border-radius:8px;margin:20px 0;border:1px solid #e0e0e0;">
          <p style="margin:0;font-size:15px;"><b>Your Review:</b></p>
          <p style="font-size:15px;color:#444;margin-top:6px;">"${message}"</p>
        </div>

        <p style="font-size:16px;color:#333;">
          We’re glad to hear from you — every review helps us improve and continue delivering better digital experiences.
          Our team truly appreciates your support. 🌟
        </p>

        <p style="font-size:14px;color:#555;margin-top:20px;">
          With gratitude,<br/>
          <b>The Aryahs World Infotech Team</b><br/>
          📧 tech.aryahs@gmail.com<br/>
          🌐 <a href="https://www.aryahsworldinfotech.com" style="color:#4f46e5;text-decoration:none;">www.aryahsworldinfotech.com</a>
        </p>

        <hr style="margin:20px 0;border:none;border-top:1px solid #ddd;">
        <p style="font-size:13px;color:#999;">
          This email was sent automatically to confirm we received your feedback.
        </p>
      </div>
    `;

    // Send both emails
    await sendMail({
      to: process.env.ADMIN_EMAIL,
      subject: "🌟 New Review Submitted — Aryahs World Infotech",
      html: adminHtml,
    });

    await sendMail({
      to: email,
      subject: "💜 Thank You for Your Feedback — Aryahs World Infotech",
      html: userHtml,
    });

    return res.status(201).json({
      success: true,
      message: "Review submitted successfully! Thank-you email sent.",
      data: newMessage,
    });
  } catch (error) {
    console.error("❌ Error handling review message:", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Could not process review message.",
    });
  }
};


// 📤 Fetch all reviews (for frontend display)
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await ContactMessage.find().sort({ createdAt: -1 }).lean();

    return res.status(200).json({
      success: true,
      message: "Reviews fetched successfully.",
      data: reviews,
    });
  } catch (error) {
    console.error("❌ Error fetching reviews:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching reviews.",
    });
  }
};
