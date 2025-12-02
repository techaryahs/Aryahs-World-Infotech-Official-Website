import React from "react";
import { motion } from "framer-motion";

function MajessyStays() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-16 overflow-hidden bg-gradient-to-br from-[#e9f0ff] via-[#f4f8ff] to-[#dbe6ff]">

      {/* 🔵 Soft Glow Background Circles (same as HeroSection) */}
      <motion.div
        className="absolute top-20 left-10 w-80 h-80 bg-blue-300/40 rounded-full blur-[140px]"
        animate={{ opacity: [0.5, 0.8, 0.5], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300/40 rounded-full blur-[150px]"
        animate={{ opacity: [0.4, 0.7, 0.4], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative bg-white/80 backdrop-blur-xl border border-blue-200 shadow-2xl shadow-blue-200/50 rounded-3xl p-10 max-w-3xl text-center"
      >
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="px-4 py-1 text-sm font-semibold bg-blue-200 text-blue-700 rounded-full"
        >
          Majessystays Project
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mt-4"
        >
          We're Still Building Something Amazing ✨
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-gray-600 text-lg mt-4 leading-relaxed"
        >
          The Majessystays platform is currently under development.
          We are creating{" "}
          <span className="font-semibold text-blue-600">
            predictive real-estate analytics
          </span>{" "}
          and{" "}
          <span className="font-semibold text-blue-600">
            intelligent recommendation engines
          </span>{" "}
          to make smarter property decisions effortless.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-8"
        >
          <a
            href="/"
            className="inline-block px-8 py-3 rounded-full border border-blue-500 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Back to Home
          </a>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="text-gray-500 text-sm mt-6"
        >
          Expected Launch: <span className="text-blue-600">In Progress</span>
        </motion.p>
      </motion.div>
    </div>
  );
}

export default MajessyStays;
