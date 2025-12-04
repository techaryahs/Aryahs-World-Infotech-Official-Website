"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiSend } from "react-icons/fi";

const StartProjectModal = ({ isOpen, onClose }) => {
  const slogans = [
    "🚀 We’ll contact you within 24 hours!",
    "💡 We build your dream project faster than you imagine.",
    "⚡ Turning your ideas into beautiful reality — fast & flawless.",
  ];

  const [currentSlogan, setCurrentSlogan] = useState(0);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Website Development",
    budgetRange: "0-25000",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Change slogans
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const slogansList = useMemo(() => slogans, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogansList.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [slogansList.length]);



  // Input change handler
  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatusMessage("✅ Inquiry submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          projectType: "Website Development",
          budgetRange: "0-25000",
          description: "",
        });
      } else {
        setStatusMessage(`❌ ${result.message || "Something went wrong."}`);
      }
    } catch {
      setStatusMessage("❌ Failed to connect to the server.");
    }

    setIsSubmitting(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 overflow-y-auto z-[9999] 
                     bg-black/40 backdrop-blur-md 
                     flex justify-center items-start pt-28 px-4 pb-10"
        >
          {/* MODAL CARD */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl 
                       shadow-2xl border border-gray-200 p-8 md:p-12"
          >
            {/* Gradient Accent */}
            <div
              className="absolute -top-24 -right-24 w-80 h-80 rounded-full 
                         bg-gradient-to-r from-purple-500 to-indigo-500 
                         blur-3xl opacity-20 pointer-events-none"
            />

            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute -top-4 -right-4 bg-white shadow-lg 
                         rounded-full p-2 hover:bg-gray-100 transition"
            >
              <FiX size={24} className="text-gray-700" />
            </button>

            {/* HEADER */}
            <div className="text-center mb-10">
              <h2
                className="text-3xl md:text-4xl font-extrabold 
                           bg-gradient-to-r from-indigo-600 to-purple-600 
                           text-transparent bg-clip-text"
              >
                Start Your Project
              </h2>

              <div className="relative h-8 mt-4">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentSlogan}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="absolute w-full text-center text-gray-600 font-medium"
                  >
                    {slogans[currentSlogan]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Full Name */}
              <div>
                <label className="font-medium text-gray-700 text-sm">
                  Full Name
                </label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full mt-1 p-3 rounded-lg border border-gray-400 
                             bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-medium text-gray-700 text-sm">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full mt-1 p-3 rounded-lg border border-gray-400 
                             bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="font-medium text-gray-700 text-sm">
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full mt-1 p-3 rounded-lg border border-gray-400 
                             bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                  required
                />
              </div>

              {/* Company */}
              <div>
                <label className="font-medium text-gray-700 text-sm">
                  Company / Organization
                </label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  className="w-full mt-1 p-3 rounded-lg border border-gray-400 
                             bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="font-medium text-gray-700 text-sm">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 rounded-lg border border-gray-400 
                             bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                >
                  <option>Website Development</option>
                  <option>AI / ML Project</option>
                  <option>Mobile App</option>
                  <option>Cybersecurity</option>
                  <option>Data Analytics</option>
                  <option>UI/UX Designer</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="font-medium text-gray-700 text-sm">
                  Budget Range
                </label>
                <select
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 rounded-lg border border-gray-400 
                             bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                >
                  <option value="0-25000">Below ₹25,000</option>
                  <option value="25000-50000">₹25,000 – ₹50,000</option>
                  <option value="50000-100000">₹50,000 – ₹1,00,000</option>
                  <option value="100000-300000">₹1,00,000 – ₹3,00,000</option>
                  <option value="300000-500000">₹3,00,000 – ₹5,00,000</option>
                  <option value="500000+">₹5,00,000+</option>

                </select>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="font-medium text-gray-700 text-sm">
                  Project Description
                </label>
                <textarea
                  name="description"
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Briefly describe your idea..."
                  className="w-full mt-1 p-3 rounded-lg border border-gray-400 
                             bg-white focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 mt-2">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 
                              py-3 text-white font-semibold rounded-xl 
                              shadow-lg transition-all ${isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-xl"
                    }`}
                >
                  <FiSend />
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </motion.button>

                {statusMessage && (
                  <p className="text-center mt-3 text-gray-700 font-medium">
                    {statusMessage}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StartProjectModal;
