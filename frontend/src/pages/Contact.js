"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FiSend, FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import illustration from "../assets/contact-illustration.png";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [message, setMessage] = useState(null);

  const onSubmit = async (data) => {
    setMessage(null);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }),

      });

      const result = await response.json();

      if (response.ok && result.success) {
        setMessage({
          type: "success",
          text: "✅ Your message has been sent successfully! Thanks for reaching out.",
        });
        reset();
      } else {
        setMessage({
          type: "error",
          text: result.message || "❌ Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage({
        type: "error",
        text: "❌ Failed to connect to the server. Please check your internet or try again later.",
      });
    }
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#eef3ff] via-[#fafbff] to-[#eaefff]
             flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-20 pt-36 pb-24 sm:pt-40 sm:pb-28"
    >
      {/* Background Glows */}
      <motion.div
        className="absolute top-20 left-10 w-60 sm:w-80 h-60 sm:h-80 bg-indigo-300 rounded-full blur-3xl opacity-20"
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-purple-300 rounded-full blur-3xl opacity-25"
        animate={{ y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-20 items-start z-10 w-full">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col justify-start text-left"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r 
                       from-indigo-600 via-purple-500 to-pink-500 bg-[length:200%_auto] leading-tight"
          >
            Get in Touch with Us
          </motion.h2>

          <p className="text-gray-600 mt-6 text-base sm:text-lg max-w-lg leading-relaxed">
            Have a project idea, business inquiry, or collaboration in mind?
            Let’s turn your vision into reality. Our experts respond within 24
            hours to all messages.
          </p>

          <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-lg leading-relaxed">
            At{" "}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-[length:200%_auto]"
            >
              Aryahs World Infotech
            </motion.span>
            , we build cutting-edge Web, AI, and 6G-driven digital solutions
            that transform businesses.
          </p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-xl sm:text-2xl font-semibold mt-12 mb-8 text-gray-700"
          >
            Send Us a Message
          </motion.h3>

          {/* Contact Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-lg text-gray-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="text-gray-700 text-sm font-medium">Full Name</label>
                <input
                  {...register("fullName", { required: "Name is required" })}
                  placeholder="John Doe"
                  className={`mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 focus:outline-none transition ${errors.fullName ? "border-red-400" : "border-gray-300"
                    }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label className="text-gray-700 text-sm font-medium">Email</label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Invalid email format",
                    },
                  })}
                  placeholder="you@example.com"
                  className={`mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 focus:outline-none transition ${errors.email ? "border-red-400" : "border-gray-300"
                    }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="text-gray-700 text-sm font-medium">Phone Number</label>
              <input
                {...register("phone")}
                placeholder="+91 98765 43210"
                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="text-gray-700 text-sm font-medium">Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                rows="4"
                placeholder="Type your message here..."
                className={`mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 focus:outline-none transition ${errors.message ? "border-red-400" : "border-gray-300"
                  }`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(99,102,241,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 mt-4 rounded-xl 
                         text-white font-semibold shadow-lg transition-all ${isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-xl"
                }`}
            >
              <FiSend />
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            {message && (
              <p
                className={`text-sm mt-3 ${message.type === "success" ? "text-green-600" : "text-red-600"
                  }`}
              >
                {message.text}
              </p>
            )}
          </form>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-start text-left pl-0 lg:pl-10"
        >
          <motion.img
            src={illustration}
            alt="Contact Illustration"
            className="w-4/5 sm:w-3/4 md:w-full max-w-sm sm:max-w-md mx-auto mb-10 drop-shadow-2xl"
            animate={{ y: [0, -20, 0], scale: [1, 1.02, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Contact Info */}
          <div className="w-full text-gray-700 space-y-6 px-2 sm:px-4">
            {[{
              icon: <FiMapPin className="text-indigo-600 mt-1 text-lg" />,
              title: "Address",
              text: "Gauri Complex, 601, Sector 11, CBD Belapur, Navi Mumbai, Maharashtra 400614",
            }, {
              icon: <FiPhone className="text-indigo-600 mt-1 text-lg" />,
              title: "Phone",
              text: "+91 9619901999",
            }, {
              icon: <FiMail className="text-indigo-600 mt-1 text-lg" />,
              title: "Email",
              text: "info@aryahsworld.com",
            }, {
              icon: <FiClock className="text-indigo-600 mt-1 text-lg" />,
              title: "Working Hours",
              text: "Mon - Fri: 9 AM – 6 PM",
            }].map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                {info.icon}
                <div>
                  <h4 className="font-semibold">{info.title}</h4>
                  <p className="text-sm">{info.text}</p>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <h4 className="font-semibold text-gray-800 mb-3 text-base">
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-6 text-2xl">
                {[{
                  icon: <FaLinkedin />, color: "#0A66C2", link: "https://linkedin.com",
                }, {
                  icon: <FaInstagram />, color: "#E4405F", link: "https://instagram.com",
                }, {
                  icon: <FaTwitter />, color: "#1DA1F2", link: "https://twitter.com",
                }, {
                  icon: <FaFacebookF />, color: "#1877F2", link: "https://facebook.com",
                }].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      scale: 1.25,
                      rotate: [0, 5, -5, 0],
                      textShadow: `0px 0px 10px ${social.color}`,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut", delay: i * 0.1 }}
                    className="cursor-pointer"
                    style={{ color: social.color }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* MAP SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full px-0 sm:px-6 md:px-12 lg:px-20 pb-24 mt-24"
      >
        <div className="flex items-center gap-3 mb-8">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: "easeInOut",
            }}
            className="text-3xl text-red-500"
          >
            📍
          </motion.div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
            Our Office Location
          </h2>
        </div>

        <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            title="Aryahs World Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.059434774934!2d73.0427876!3d19.017102499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c34d7fd7396b%3A0x8936c484aef8948b!2sAryahs%20World%20Infotech%20OPC%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1758013636819!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: "0" }}
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
