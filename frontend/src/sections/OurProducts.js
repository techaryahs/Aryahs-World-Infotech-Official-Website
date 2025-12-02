import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import GenAI from "../assets/genAI.jpg";
import Majestty from "../assets/majestty.jpg";
import CareerCouns from "../assets/career_couns.jpg";

// JSON-LD Schema
const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "AI Product List",
  "itemListElement": [
    {
      "@type": "Product",
      "name": "Majesstystays",
      "description": "AI-powered real estate recommendations...",
      "url": "https://www.yourdomain.com/majesstystays",
    },
    {
      "@type": "Product",
      "name": "CareerGenAI",
      "description": "AI-powered career guidance platform...",
      "url": "https://www.yourdomain.com/career-genai",
    },
    {
      "@type": "Product",
      "name": "GenAI Poshan Yojana",
      "description": "AI-driven food monitoring and school inspection...",
      "url": "https://www.yourdomain.com/genai-poshan",
    },
  ],
};

// PRODUCTS ARRAY WITH newTab OPTION
const products = [
  {
    name: "Majesstystays",
    tagline:
      "AI-powered real estate recommendations with predictive market analytics, pricing intelligence, and user-personalized insights for property investments.",
    tech: "AI + Real Estate",
    link: "/Majesstystays",
    img: Majestty,
    newTab: false, // ❌ same tab
  },
  {
    name: "CareerGenAI",
    tagline:
      "AI-powered career guidance platform using LLMs and resume intelligence to analyze student potential and match ideal career paths.",
    tech: "AI, NLP, Web",
    link: "https://careergenai.in/",
    img: CareerCouns,
    newTab: true, // ✅ open in new tab
  },
  {
    name: "GenAI Poshan Yojana",
    tagline:
      "An AI-powered school inspection platform for monitoring food quality, sanitation, and student wellness in real time.",
    tech: "AI, Computer Vision, Public Sector",
    link: "https://play.google.com/store/apps/details?id=com.amit.genai",
    img: GenAI,
    newTab: true, // ✅ open in new tab
  },
];

function ProductsFuturisticGrid() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="products"
      className="relative w-full py-28 overflow-hidden bg-[#05060d] text-white"
    >
      {/* SEO Metadata */}
      <Helmet>
        <title>Our AI Products | Majesstystays, CareerGenAI, GenAI Poshan</title>
        <meta
          name="description"
          content="Explore our AI-powered platforms — Majesstystays, CareerGenAI and GenAI Poshan."
        />
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,50,150,0.25),rgba(0,0,0,1))]" />

      <motion.div
        className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Header */}
      <header className="relative z-10 text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-500 to-yellow-300 bg-clip-text text-transparent">
          💼 Our AI Products
        </h1>
        <p className="text-gray-400 mt-3 text-lg">
          Explore our AI-driven platforms — innovation meets intelligence.
        </p>
      </header>

      {/* Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-3 gap-10">
        {products.map((product, index) => {
          const isExpanded = expandedIndex === index;
          const shortDesc =
            product.tagline.length > 110
              ? product.tagline.slice(0, 110) + "..."
              : product.tagline;

          return (
            <motion.article
              key={index}
              layout
              whileHover={{ scale: 1.03 }}
              className="relative group bg-[#0a0c18]/60 border border-blue-500/30 backdrop-blur-lg rounded-3xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <motion.img
                  src={product.img}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80"
                  whileHover={{ scale: 1.1 }}
                />
              </div>

              {/* Text */}
              <motion.div className="p-8 flex flex-col justify-between min-h-[280px]">
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-blue-300">
                    {product.name}
                  </h2>

                  <motion.p className="text-gray-400 mb-2">
                    {isExpanded ? product.tagline : shortDesc}
                  </motion.p>

                  {product.tagline.length > 110 && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-sm text-yellow-300 underline"
                    >
                      {isExpanded ? "See Less" : "See More"}
                    </button>
                  )}

                  <span className="block mt-3 text-sm font-medium text-blue-300 bg-blue-900/40 px-3 py-1 rounded-full w-fit">
                    {product.tech}
                  </span>
                </div>

                {/* Visit Website Button */}
                <motion.a
                  whileHover={{
                    scale: 1.05,
                    background: "linear-gradient(90deg, #ffd700, #ffbb00)",
                    color: "#000",
                  }}
                  href={product.link}
                  target={product.newTab ? "_blank" : "_self"} // ⭐ MAIN CHANGE
                  rel={product.newTab ? "noopener noreferrer" : ""}
                  className="mt-6 text-center border border-yellow-400 rounded-full py-2.5 text-yellow-300 font-semibold"
                >
                  Visit Website
                </motion.a>
              </motion.div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default ProductsFuturisticGrid;
