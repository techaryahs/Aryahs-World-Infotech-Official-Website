import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet"; // ✅ SEO meta tags
import HeroImage from "../assets/caro.png";

function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="AryahsWorld Infotech AI & 6G Innovation Section"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#e9f0ff] via-[#f8fbff] to-[#d6e4ff] pt-24 md:pt-28"
    >
      {/* --------- SEO Meta Tags --------- */}
      <Helmet>
        {/* Basic SEO */}
        <title>AryahsWorld Infotech | AI, 6G & Smart Digital Innovation Company</title>
        <meta
          name="description"
          content="AryahsWorld Infotech pioneers AI and 6G innovation, crafting intelligent digital products, next-generation automation, and smart connectivity solutions for a smarter world."
        />
        <meta
          name="keywords"
          content="AI company, 6G technology, digital transformation, AryahsWorld, smart solutions, AI innovation, automation, IoT, tech company India"
        />
        <link rel="canonical" href="https://aryahsworld.com/" />

        {/* Open Graph (Social Media) */}
        <meta property="og:title" content="AryahsWorld Infotech" />
        <meta
          property="og:description"
          content="Pioneering the future with AI & 6G innovation — creating next-gen digital products and intelligent automation."
        />
        <meta property="og:image" content="/assets/caro.png" />
        <meta property="og:url" content="https://aryahsworld.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AryahsWorld Infotech" />
        <meta
          name="twitter:description"
          content="AI & 6G Innovation | Intelligent Digital Products | Smart Automation."
        />
        <meta name="twitter:image" content="/assets/caro.png" />
      </Helmet>

      {/* ---------- Background Animation ---------- */}
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
          </motion.h3>

          {/* ✅ SEO-Optimized H1 + Description */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900"
          >
            We’re{" "}
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500 text-transparent bg-clip-text">
              AryahsWorld Infotech
            </span>
            ,<br /> Pioneering the Future with{" "}
            <span className="text-blue-600">AI & 6G Innovation</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-gray-700 text-base md:text-lg max-w-xl leading-relaxed"
          >
            AryahsWorld Infotech develops intelligent{" "}
            <strong>AI-powered digital products</strong> and{" "}
            <strong>6G connectivity solutions</strong> that redefine{" "}
            <strong>automation, innovation,</strong> and{" "}
            <strong>next-generation technology</strong> for a smarter, connected world.
          </motion.p>

          {/* ---------- BUTTONS ---------- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex gap-4 pt-5"
          >
            {/* SERVICES BUTTON */}
            <motion.a
              href="/services"
              aria-label="View AryahsWorld Services"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="relative overflow-hidden px-6 py-2.5 rounded-full font-medium text-blue-600 border-2 border-blue-600 bg-transparent transition-all duration-300 group text-sm md:text-base"
            >
              <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Aryahs Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </motion.a>

            {/* INTERNSHIP BUTTON */}
            
{/* Internship Button (using interns.js page) */}
<motion.a
  href="/interns"
  aria-label="Apply for Internship at AryahsWorld Infotech"
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.96 }}
  className="relative overflow-hidden px-6 py-2.5 rounded-full font-medium text-blue-600 border-2 border-blue-600 transition-all duration-300 group text-sm md:text-base"
>
  <span className="absolute left-0 top-0 h-full w-0 bg-blue-600 transition-all duration-500 ease-out group-hover:w-full"></span>
  <span className="relative z-10 group-hover:text-white transition-colors duration-500">
    Hire Me
  </span>
</motion.a>

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
            alt="AI engineer working on AryahsWorld Infotech's innovative digital systems"
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
