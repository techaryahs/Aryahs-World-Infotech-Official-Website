import nodemailer from "nodemailer";

export const sendMail = async ({ to, subject, html }) => {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER, // your email
        pass: process.env.SMTP_PASS, // your app password
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Aryahs World Infotech" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });

    console.log("✅ Email sent successfully to:", to);
  } catch (error) {
    console.error("❌ Email sending failed:", error.message);
  }
};
