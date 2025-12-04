"use client";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi"; // only FiSend is used
import illustration from "../assets/contact-illustration.png";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [message, setMessage] = useState(null);
  const [rating, setRating] = useState(0);
  const [, setReviews] = useState([]); // reviews removed to avoid ESLint warning

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/contact/reviews`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setReviews(data.data);
      })
      .catch(() => console.log("Failed to load reviews"));
  }, []);

  const handleRating = (value) => setRating(value);

  const onSubmit = async (data) => {
    setMessage(null);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          message: data.message,
          rating: rating > 0 ? rating : null,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setMessage({
          type: "success",
          text: "✅ Your message has been sent successfully! Thanks for reaching out.",
        });
        reset();
        setRating(0);
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
    <>
      <Helmet>
        <title>Contact Aryahs World Infotech | Web, AI & 6G Solutions</title>
        <meta
          name="description"
          content="Contact Aryahs World Infotech for AI, web development, and digital transformation services. Let’s build innovative solutions powered by 6G and AI."
        />
      </Helmet>

      <section
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#eef3ff] via-[#fafbff] to-[#eaefff]
             flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-20 pt-36 pb-24 sm:pt-40 sm:pb-28"
      >
        {/* Background Glow */}
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

        {/* Content */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-20 items-start z-10 w-full">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r 
                         from-indigo-600 via-purple-500 to-pink-500 bg-[length:200%_auto] leading-tight"
            >
              Get in Touch with Us
            </motion.h1>

            <p className="text-gray-600 mt-6 text-base sm:text-lg max-w-lg leading-relaxed">
              Have a project idea, business inquiry, or collaboration in mind? Let’s turn your vision into reality.
              Our experts respond within 24 hours to all messages.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mt-12 mb-8 text-gray-700">
              Send Us a Message
            </h2>

            {/* FORM */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-lg text-gray-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="fullName" className="text-gray-700 text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    {...register("fullName", { required: "Name is required" })}
                    placeholder="John Doe"
                    className={`mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 focus:outline-none transition ${errors.fullName ? "border-red-400" : "border-gray-300"}`}
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="text-gray-700 text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" },
                    })}
                    placeholder="you@example.com"
                    className={`mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 focus:outline-none transition ${errors.email ? "border-red-400" : "border-gray-300"}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="text-gray-700 text-sm font-medium">Phone Number</label>
                <input
                  id="phone"
                  {...register("phone")}
                  placeholder="+91 98765 43210"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-gray-700 text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  rows="4"
                  placeholder="Type your message here..."
                  className={`mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 focus:outline-none transition ${errors.message ? "border-red-400" : "border-gray-300"}`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              {/* ⭐ Rating Section */}
              <div className="flex flex-col items-start justify-start my-6">
                <label className="text-gray-700 font-medium mb-3 text-base sm:text-lg">
                  How would you rate your experience?
                </label>
                <div className="flex items-center space-x-3 bg-white shadow-inner rounded-xl px-6 py-3 border border-gray-200">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      type="button"
                      key={star}
                      whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                      onClick={() => handleRating(star)}
                      className={`text-4xl transition-all duration-300 ${star <= rating
                          ? "text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.7)]"
                          : "text-gray-300 hover:text-yellow-300"
                        }`}
                    >
                      ★
                    </motion.button>
                  ))}
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(99,102,241,0.5)" }}
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
                <p className={`text-sm mt-3 ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
                  {message.text}
                </p>
              )}
            </form>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center lg:pl-10"
          >
            <motion.img
              src={illustration}
              alt="Contact Aryahs World Infotech"
              className="w-4/5 sm:w-3/4 md:w-full max-w-sm sm:max-w-md drop-shadow-2xl"
              animate={{ y: [0, -20, 0], scale: [1, 1.03, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="mt-10 text-center text-gray-700 text-base sm:text-lg font-medium max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="text-indigo-600 font-semibold">We’d love to hear from you!</span>
              Whether it’s a new idea or a partnership opportunity — let’s build something innovative together. 🚀
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 🌍 OFFICE LOCATION MAP SECTION */}
      <section className="w-full bg-white py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c3b70]">
            Our Office Location
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
            Visit us at our office or connect online — we’re always here to help you grow.
          </p>
        </div>

        <div className="mt-10 w-full h-[350px] sm:h-[420px] md:h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
          <iframe
            title="Aryahs World Infotech Office Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.059434774934!2d73.0427876!3d19.017102499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c34d7fd7396b%3A0x8936c484aef8948b!2sAryahs%20World%20Infotech%20OPC%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1758013636819!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
