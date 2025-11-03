"use client";
import React, { useState, useEffect } from "react";
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
    company: "",
    projectType: "Website Development",
    budgetRange: "Under 1000",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Rotate slogans
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit (using fetch)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      console.log("Submitting to:", "http://localhost:5000/api/inquiry");

      const response = await fetch("http://localhost:5000/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Try to parse JSON safely
      let data;
      try {
        data = await response.json();
      } catch {
        throw new Error("Invalid JSON response — likely HTML fallback");
      }

      if (response.ok && data.success) {
        setStatusMessage("✅ Inquiry submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          company: "",
          projectType: "Website Development",
          budgetRange: "Under 1000",
          description: "",
        });
      } else {
        setStatusMessage(`❌ ${data.message || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("Fetch error:", error.message);
      setStatusMessage("❌ Failed to connect to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-black/90 backdrop-blur-md p-4"
        >
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-5xl bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 overflow-hidden p-10 md:p-12"
          >
            {/* Background Accent */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-3xl"
            ></motion.div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 bg-white/90 hover:bg-white text-gray-700 hover:text-indigo-600 shadow-lg p-2 rounded-full transition-all z-10"
            >
              <FiX size={22} />
            </button>

            {/* Header Section */}
            <div className="text-center mb-10">
              <motion.h2
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              >
                Start Your Project
              </motion.h2>

              <div className="relative h-8 mt-4">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentSlogan}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="absolute w-full text-center text-gray-700 font-medium"
                  >
                    {slogans[currentSlogan]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Company / Organization</label>
                <input
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                >
                  <option>Website Development</option>
                  <option>AI / ML Project</option>
                  <option>Mobile App</option>
                  <option>Research / 6G</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Budget Range</label>
                <select
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                >
                  <option>Under 1000</option>
                  <option>1000 - 5000</option>
                  <option>5000 - 10000</option>
                  <option>10000+</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Project Description</label>
                <textarea
                  name="description"
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none resize-none"
                  placeholder="Briefly describe your idea..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 15px rgba(99,102,241,0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-xl"
                  }`}
                >
                  {isSubmitting ? "Submitting..." : <> <FiSend /> Submit Inquiry </>}
                </motion.button>

                {statusMessage && (
                  <p className="text-center mt-4 font-medium text-gray-700">
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
