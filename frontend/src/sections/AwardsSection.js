import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet"; // ✅ Added for SEO Meta Tags
import AwardImage from "../assets/award.jpg"; // Replace with your image

function AwardsSection() {
  return (
    <section
      id="awards"
      aria-label="AryahsWorld Infotech Awards and Achievements Section"
      className="relative py-28 bg-gradient-to-b from-[#f9fbff] via-[#eef3ff] to-[#e2e8ff] text-[#001b3e] overflow-hidden"
    >
      {/* === 🧠 SEO META TAGS === */}
      <Helmet>
        <title>
          Awards & Achievements | AryahsWorld Infotech | AI & 6G Innovation
        </title>
        <meta
          name="description"
          content="AryahsWorld Infotech proudly received the ALFA Excellence Award 2023 for outstanding innovation in Artificial Intelligence and Digital Transformation."
        />
        <meta
          name="keywords"
          content="AryahsWorld Infotech awards, AI excellence award, 6G innovation recognition, artificial intelligence company India"
        />
        <link rel="canonical" href="https://aryahsworld.com/awards" />

        {/* ✅ Social Media (Open Graph) Tags */}
        <meta property="og:title" content="AryahsWorld Infotech Awards" />
        <meta
          property="og:description"
          content="Recognizing AryahsWorld Infotech’s excellence in AI and 6G innovation with the ALFA Excellence Award 2023."
        />
        <meta property="og:image" content="/assets/award.jpg" />
        <meta property="og:url" content="https://aryahsworld.com/awards" />
      </Helmet>

      {/* === Background Glow === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent)] blur-[160px]" />

      {/* === Heading === */}
      <div className="relative z-10 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-600 to-yellow-400 text-transparent bg-clip-text"
        >
        Our Achievements & Awards
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto"
        >
          Celebrating our excellence and innovation recognized across the
          industry — marking milestones of impact and dedication.
        </motion.p>
      </div>

      {/* === Award Showcase === */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="absolute w-[420px] h-[420px] bg-gradient-to-tr from-yellow-300/30 via-blue-300/20 to-transparent blur-[120px]" />
          <img
            src={AwardImage}
            alt="AryahsWorld Infotech receiving ALFA Excellence Award 2023 for AI Innovation"
            className="relative z-10 w-[90%] md:w-[400px] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] border border-white/50 hover:scale-[1.02] transition-transform duration-700"
          />
        </motion.div>

        {/* Right Side - Award Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 space-y-6"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#002060]">
            🥇 ALFA Excellence Award 2023
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            Aryahs World Infotech was honored with the prestigious{" "}
            <span className="font-semibold text-blue-700">
              “ALFA Excellence Award 2023”
            </span>{" "}
            on <strong>16th November 2023</strong> for its remarkable
            contribution in{" "}
            <span className="text-indigo-600 font-semibold">
              Artificial Intelligence, Digital Innovation & GenAI
            </span>.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            This recognition highlights AryahsWorld Infotech’s dedication to
            advancing next-generation technologies and delivering intelligent
            solutions that transform industries and improve everyday life.
          </p>

          {/* Highlight Tag */}
          <div className="inline-block mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-yellow-400 text-white font-semibold shadow-[0_0_20px_rgba(99,102,241,0.4)]">
            Excellence in AI & Innovation
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AwardsSection;
