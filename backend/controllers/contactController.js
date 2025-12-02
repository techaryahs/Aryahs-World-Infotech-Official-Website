import ContactMessage from "../models/ContactMessage.js";
import { sendMail } from "../utils/sendMail.js";

export const createContactMessage = async (req, res) => {
  try {
    console.log("📩 Incoming contact/review message:", req.body);

    // Accept both message (contact) OR review (feedback)
    const { fullName, name, email, phone, message, review, rating } = req.body;

    const userName = fullName || name;
    const finalMessage = message || review; // ⭐ FIXED: Support both keys

    if (!userName || !email || !finalMessage) {
      return res.status(400).json({ success: false, message: "Missing required fields." });
    }

    // Save to MongoDB
    const newMessage = new ContactMessage({
      fullName: userName,
      email,
      phone,
      message: finalMessage,  // ⭐ FIXED
      rating: rating || null,
    });

    await newMessage.save();
    console.log("✅ Saved message:", newMessage);

    // ===========================
    // EMAIL TO ADMIN
    // ===========================
    const adminHtml = `
      <h2>🌟 New Contact / Review Received</h2>
      <p><b>Name:</b> ${userName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || "N/A"}</p>
      ${
        rating
          ? `<p><b>Rating:</b> ⭐ ${rating}/5</p>`
          : ""
      }
      <p><b>Message:</b></p>
      <blockquote style="border-left:4px solid #4f46e5;padding-left:10px;color:#333;">${finalMessage}</blockquote>
      <hr/>
      <p style="color:#555;">🕐 Received on: ${new Date().toLocaleString()}</p>
    `;

    // ===========================
    // THANK YOU EMAIL TO USER
    // ===========================
    const userHtml = `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:auto;padding:24px;background:#f9f9f9;border-radius:12px;">
        <h2 style="color:#4f46e5;">Hey ${userName},</h2>

        <p style="font-size:16px;color:#333;">
          Thank you so much for reaching out to us! 💜
        </p>

        ${
          rating
            ? `<p style="font-size:16px;color:#333;">We appreciate your <b>${rating}-star</b> feedback!</p>`
            : ""
        }

        <div style="background:#fff;padding:16px;border-radius:8px;margin:20px 0;border:1px solid #e0e0e0;">
          <p style="margin:0;font-size:15px;"><b>Your Message:</b></p>
          <p style="font-size:15px;color:#444;margin-top:6px;">"${finalMessage}"</p>
        </div>

        <p style="font-size:16px;color:#333;">
          Our team will get back to you shortly.
        </p>

        <p style="font-size:14px;color:#555;margin-top:20px;">
          With gratitude,<br/>
          <b>The Aryahs World Infotech Team</b><br/>
          📧 tech.aryahs@gmail.com<br/>
          🌐 <a href="https://www.aryahsworldinfotech.com" style="color:#4f46e5;text-decoration:none;">www.aryahsworldinfotech.com</a>
        </p>

        <hr style="margin:20px 0;border:none;border-top:1px solid #ddd;">
        <p style="font-size:13px;color:#999;">
          This email was sent automatically to confirm we received your message.
        </p>
      </div>
    `;

    // Send both emails
    await sendMail({
      to: process.env.ADMIN_EMAIL,
      subject: "🌟 New Contact / Review Received — Aryahs World Infotech",
      html: adminHtml,
    });

    await sendMail({
      to: email,
      subject: "💜 Thank You — Aryahs World Infotech",
      html: userHtml,
    });

    return res.status(201).json({
      success: true,
      message: "Message submitted successfully! Thank-you email sent.",
      data: newMessage,
    });

  } catch (error) {
    console.error("❌ Error handling message:", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Could not process message.",
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
