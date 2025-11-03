import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GenAI from "../assets/genAI.jpg";
import Majestty from "../assets/majestty.jpg";
import CareerCouns from "../assets/career_couns.jpg";

const products = [
  {
    name: "Majesstystays",
    tagline:
      "AI-powered real estate recommendations with predictive market analytics, pricing intelligence, and user-personalized insights for property investments.",
    tech: "AI + Real Estate",
    link: "#",
    img: Majestty,
  },
  {
    name: "CareerGenAI",
    tagline:
      "AI-powered career guidance platform using LLMs and resume intelligence to analyze student potential and match ideal career paths based on skills and future trends.",
    tech: "AI, NLP, Web",
    link: "#",
    img: CareerCouns,
  },
  {
    name: "GenAI Poshan Yojana",
    tagline:
      "An AI-powered school inspection platform for monitoring food quality, sanitation, and student wellness in real-time — designed for scalable public sector deployment.",
    tech: "AI, Computer Vision, Public Sector",
    link: "#",
    img: GenAI,
  },
];

function ProductsFuturisticGrid() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-28 overflow-hidden bg-[#05060d] text-white">
      {/* ----- Background ----- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,50,150,0.25),rgba(0,0,0,1))]" />
      <motion.div
        className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ----- Header ----- */}
      <div className="relative z-10 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
          💼 Our Products
        </h2>
        <p className="text-gray-400 mt-3 text-lg">
          Explore our AI-driven platforms — innovation meets intelligence.
        </p>
      </div>

      {/* ----- Product Grid ----- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-3 gap-10">
        {products.map((product, index) => {
          const isExpanded = expandedIndex === index;
          const shortDesc =
            product.tagline.length > 110
              ? product.tagline.slice(0, 110) + "..."
              : product.tagline;

          return (
            <motion.div
              key={index}
              layout
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 30px rgba(59,130,246,0.3)",
              }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="relative group bg-[#0a0c18]/60 border border-blue-500/30 backdrop-blur-lg rounded-3xl overflow-hidden shadow-[0_0_25px_rgba(0,64,255,0.15)]"
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <motion.img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80 transition-all duration-500 group-hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000]/60 via-transparent to-transparent"></div>
              </div>

              {/* Glow Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/30 to-indigo-400/30 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"
              ></motion.div>

              {/* Text */}
              <motion.div layout className="relative z-10 p-8 flex flex-col justify-between min-h-[280px]">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-blue-300 group-hover:text-yellow-300 transition-colors duration-500">
                    {product.name}
                  </h3>

                  <motion.p
                    layout
                    className="text-gray-400 mb-2 leading-relaxed overflow-hidden"
                  >
                    {isExpanded ? product.tagline : shortDesc}
                  </motion.p>

                  {product.tagline.length > 110 && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-sm text-yellow-300 hover:text-yellow-200 underline transition-colors"
                    >
                      {isExpanded ? "See Less" : "See More"}
                    </button>
                  )}

                  <span className="block mt-3 text-sm font-medium text-blue-300 bg-blue-900/40 px-3 py-1 rounded-full w-fit">
                    {product.tech}
                  </span>
                </div>

                <motion.a
                  whileHover={{
                    scale: 1.05,
                    background:
                      "linear-gradient(90deg, #ffd700 0%, #ffbb00 100%)",
                    color: "#000",
                    boxShadow: "0 0 25px rgba(255,215,0,0.6)",
                  }}
                  href={product.link}
                  className="mt-6 text-center border border-yellow-400 rounded-full py-2.5 text-yellow-300 font-semibold transition-all duration-500"
                >
                  Visit Website
                </motion.a>
              </motion.div>

              {/* Floating Glow */}
              <motion.div
                className="absolute w-[150px] h-[150px] bg-gradient-to-br from-blue-400/30 to-yellow-300/20 blur-[90px] rounded-full opacity-60 top-1/3 left-1/3"
                animate={{
                  x: [0, 30, -20, 0],
                  y: [0, -20, 30, 0],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0c18] to-transparent"></div>
    </section>
  );
}

export default ProductsFuturisticGrid;
