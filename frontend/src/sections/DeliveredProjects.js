

// ✅ DeliveredProjects.js (SEO + Performance Optimized)
import React, { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { X } from "lucide-react";
import { Helmet } from "react-helmet"; // 🧠 Added for SEO Meta Tags

// === Images ===
import GenAI from "../assets/genAI.jpg";
import Majestty from "../assets/majestty.jpg";
import CareerCouns from "../assets/career_couns.jpg";
import SecureConnect from "../assets/caro1.png";
import agri from "../assets/agri.jpg";
import trans from "../assets/trans.jpg";
import balgadi from "../assets/balgadi.png";

// === Data ===
const projects = [
  {
    year: "2025",
    title: "Majesstystays",
    desc: "AI-powered real estate recommendations with predictive analytics and pricing intelligence.",
    details:
      "Majesstystays leverages AI algorithms to predict rental prices, recommend ideal properties, and analyze location trends using data-driven insights.",
    img: Majestty,
  },
  {
    year: "2025",
    title: "CareerGenAI",
    desc: "LLM-powered AI career guidance platform with resume intelligence and future skill mapping.",
    details:
      "CareerGenAI analyzes resumes, predicts skill gaps, and suggests upskilling pathways using advanced LLM embeddings and personalized AI-driven recommendations.",
    img: CareerCouns,
  },
  {
    year: "2025",
    title: "GenAI Poshan Yojana",
    desc: "AI-based monitoring for school sanitation, food quality, and student wellness in real-time.",
    details:
      "This project uses computer vision and IoT analytics to monitor hygiene and food safety in schools, ensuring data-driven nutrition improvement.",
    img: GenAI,
  },
  {
    year: "2025",
    title: "6G Security Connect",
    desc: "Federated AI framework ensuring privacy and security for IoT and 6G ecosystems.",
    details:
      "6G Secure Connect integrates federated learning with encryption to enable distributed model training without exposing raw data — vital for 6G IoT security.",
    img: SecureConnect,
  },

  {
    year: "2025",
    title: "Crop Yield Prediction ",
    desc: "Crop phenotype traits for each sample.",
    details:
      "A machine learning and deep learning–based system that predicts crop yield using processed genotype and phenotype data. The project focuses on using SNP-derived genetic features and observed plant traits to build an accurate yield prediction model.",
    img: agri,
  },


  {
    year: "2025",
    title: "Ethereum Fraud Detection ",
    desc: "Contains normal and fraudulent Ethereum transactions with labeled targets.",
    details:
      "An AI-based fraud detection system designed to analyze Ethereum blockchain transaction patterns and detect suspicious or malicious behavior such as scams, phishing, money laundering, and abnormal transfer activity.",
    img: trans,
  },

  {
    year: "2025",
    title: "bailgada-trading",
    desc: "Smart digital platform for traditional rural trading",
    details:
      "A modern trading app inspired by traditional bailgadi commerce, enabling rural buyers and sellers to connect, trade, and track goods with smart digital features.",
    img: balgadi,
  },

];

// === Animation Presets ===
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// === CountUp Animation Component ===
function CountUpOnView({ end, suffix, className }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div ref={ref}>
      {inView ? (
        <CountUp end={end} suffix={suffix} duration={2.5} className={className} />
      ) : (
        <span className={className}>0{suffix}</span>
      )}
    </div>
  );
}

// === Main Component ===
export default function DeliveredProjects() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="delivered-projects"
      aria-label="Delivered AI and 6G Projects by AryahsWorld Infotech"
      className="relative py-28 bg-[#020617] text-white overflow-hidden"
    >
      {/* ✅ SEO META TAGS */}
      <Helmet>
        <title>Aryahs World Infotech (OPC) Pvt Ltd | AI & 6G Innovations</title>
        <meta
          name="description"
          content="Explore AryahsWorld Infotech’s delivered AI and 6G projects — from real estate analytics and career guidance to IoT security and government AI initiatives."
        />
        <meta
          name="keywords"
          content="AryahsWorld Infotech projects, AI development, 6G innovation, Majesstystays, CareerGenAI, GenAI Poshan Yojana, Secure Connect, AI solutions"
        />
        <link rel="canonical" href="https://aryahsworld.com/projects" />

        {/* ✅ Open Graph Tags */}
        <meta property="og:title" content="Delivered Projects | AryahsWorld Infotech" />
        <meta
          property="og:description"
          content="Discover AryahsWorld Infotech’s real-world impact through AI-powered and 6G-secured innovation."
        />
        <meta property="og:image" content="/assets/ai-projects.jpg" />
        <meta property="og:url" content="https://aryahsworld.com/projects" />
      </Helmet>

      {/* === Background Lighting === */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.12),transparent_60%)]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(250,204,21,0.1),transparent_60%)]"
        animate={{ backgroundPosition: ["100% 0%", "0% 100%", "100% 0%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* === Header === */}
      <div className="text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-400 via-indigo-400 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(99,102,241,0.3)]"
        >
          🧩 Delivered Projects & Innovations
        </motion.h2>
        <p className="text-gray-400 mt-3 text-base max-w-2xl mx-auto">
          Our journey through AI and 6G innovation — every milestone defines a new frontier.
        </p>
      </div>

      {/* === Timeline === */}
      <div className="absolute top-[45%] left-0 right-0 h-[3px] bg-gradient-to-r from-sky-400 via-indigo-400 to-amber-200 blur-[2px] opacity-50 z-0"></div>

      {/* === Continuous Scroll === */}
      <div className="relative z-10 overflow-hidden">
        <motion.div
          className="flex items-center gap-40 w-max"
          animate={{ x: ["-100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          {[...projects, ...projects, ...projects].map((proj, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className={`relative flex flex-col items-center ${i % 2 === 0 ? "translate-y-[100px]" : "translate-y-[-100px]"
                }`}
            >
              {/* Connector Line */}
              <div
                className={`w-[2px] h-[100px] ${i % 2 === 0
                  ? "bg-gradient-to-t from-indigo-400 to-transparent"
                  : "bg-gradient-to-b from-indigo-400 to-transparent"
                  } opacity-50`}
              ></div>

              {/* Project Card */}
              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={900}>
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative w-[240px] sm:w-[260px] md:w-[280px] bg-white/10 backdrop-blur-2xl border border-white/10 hover:border-sky-400/30 rounded-3xl shadow-[0_0_30px_rgba(56,189,248,0.1)] overflow-hidden cursor-pointer group transition-all duration-700"
    onClick={() => setSelected(proj)}
    aria-label={`View details about ${proj.title}`}
  >
    <div className="w-full h-32 overflow-hidden rounded-t-3xl">
      <img
        src={proj.img}
        alt={proj.title} 
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
    </div>

    <div className="p-5 text-center">
      <p className="text-sky-400 text-xs font-semibold tracking-wider">{proj.year}</p>
      <h3 className="text-lg font-bold mt-2 text-white">{proj.title}</h3>
      <p className="text-gray-400 text-xs mt-2 leading-relaxed">{proj.desc}</p>
    </div>

  </motion.div>
</Tilt>


            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* === Stats Section === */}
      <div className="relative z-20 mt-12">
        <div className="max-w-6xl mx-auto px-4 md:px-10 flex justify-center items-stretch flex-wrap md:flex-nowrap gap-4 sm:gap-6 md:gap-8 text-center">
          {[
            { label: "Projects Completed", value: 43, suffix: "+" },
            { label: "AI Solutions Deployed", value: 22, suffix: "+" },
            { label: "Clients Served", value: 17, suffix: "+" },
            { label: "Ongoing Innovations", value: 7, suffix: "+" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 min-w-[100px] p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-sky-400/30 shadow-[0_0_25px_rgba(56,189,248,0.05)] hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all duration-500"
            >
              <CountUpOnView
                end={stat.value}
                suffix={stat.suffix}
                className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-400 via-indigo-400 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.2)]"
              />
              <p className="text-gray-400 mt-1 text-xs md:text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* === Modal === */}
      {selected && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-[#0a0f1c] border border-white/10 rounded-3xl shadow-2xl max-w-lg w-[90%] p-6 text-center relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
              onClick={() => setSelected(null)}
              aria-label="Close project details"
            >
              <X size={24} />
            </button>
            <img
              src={selected.img}
              alt={`${selected.title} detailed view`}
              className="w-full h-48 object-cover rounded-2xl mb-4"
              loading="lazy"
            />
            <h3 className="text-2xl font-bold text-white mb-2">{selected.title}</h3>
            <p className="text-sky-400 text-sm mb-2">{selected.year}</p>
            <p className="text-gray-300 text-sm leading-relaxed">{selected.details}</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
