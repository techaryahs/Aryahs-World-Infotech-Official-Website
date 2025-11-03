import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../assets/caro.png";

function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#e9f0ff] via-[#f8fbff] to-[#d6e4ff] pt-24 md:pt-28">
      {/* ---------- Dynamic Gradient Background Animation ---------- */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-indigo-200 opacity-60"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundSize: "300% 300%" }}
      />

      {/* ---------- Floating Light Orbs ---------- */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
        animate={{ y: [0, 60, 0], x: [0, 40, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ---------- Content ---------- */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-28 grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col justify-center text-left space-y-5 md:space-y-7"
        >
          <motion.h3
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-blue-700 text-sm md:text-base font-semibold tracking-widest uppercase"
          >
            Hello There 👋
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900"
          >
            We’re{" "}
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500 text-transparent bg-clip-text">
              Aryahs World Infotech
            </span>
            ,<br /> Pioneering the Future with{" "}
            <span className="text-blue-600">AI & 6G</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-gray-700 text-base md:text-lg max-w-xl leading-relaxed"
          >
            At Aryahs, we craft intelligent, next-gen solutions powered by
            Artificial Intelligence, IoT, and 6G innovation — enabling a smarter,
            connected world.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex gap-4 pt-5"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="relative overflow-hidden px-6 py-2.5 rounded-full font-medium text-blue-600 border-2 border-blue-600 bg-transparent transition-all duration-300 group text-sm md:text-base"
            >
              <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative z-10 flex items-center gap-2 justify-center">
                View My Portfolio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="relative overflow-hidden px-6 py-2.5 rounded-full font-medium text-blue-600 border-2 border-blue-600 transition-all duration-300 group text-sm md:text-base"
            >
              <span className="absolute left-0 top-0 h-full w-0 bg-blue-600 transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                Hire Me
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 blur-3xl opacity-25 rounded-3xl scale-110"></div>
          <motion.img
            src={HeroImage}
            alt="Hero"
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            className="relative w-[95%] md:w-[90%] lg:w-[88%] max-w-4xl object-cover rounded-3xl drop-shadow-2xl"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

export default HeroSection;
