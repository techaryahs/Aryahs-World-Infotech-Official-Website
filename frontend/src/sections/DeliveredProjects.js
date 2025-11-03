import React, { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { X } from "lucide-react";

import GenAI from "../assets/genAI.jpg";
import Majestty from "../assets/majestty.jpg";
import CareerCouns from "../assets/career_couns.jpg";
import SecureConnect from "../assets/caro1.png";

const projects = [
  {
    year: "2021",
    title: "Majesstystays",
    desc: "AI-powered real estate recommendations with predictive analytics and pricing intelligence.",
    details:
      "Majesstystays leverages AI algorithms to predict rental prices, recommend ideal properties, and analyze location trends using data-driven insights.",
    img: Majestty,
  },
  {
    year: "2022",
    title: "CareerGenAI",
    desc: "LLM-powered AI career guidance platform with resume intelligence and future skill mapping.",
    details:
      "CareerGenAI analyzes resumes, predicts skill gaps, and suggests upskilling pathways using advanced LLM embeddings and personalized AI-driven recommendations.",
    img: CareerCouns,
  },
  {
    year: "2023",
    title: "GenAI Poshan Yojana",
    desc: "AI-based monitoring for school sanitation, food quality, and student wellness in real-time.",
    details:
      "This project uses computer vision and IoT analytics to monitor hygiene and food safety in schools, ensuring data-driven nutrition improvement.",
    img: GenAI,
  },
  {
    year: "2024",
    title: "6G Secure Connect",
    desc: "Federated AI framework ensuring privacy and security for IoT and 6G ecosystems.",
    details:
      "6G Secure Connect integrates federated learning with encryption to enable distributed model training without exposing raw data — vital for 6G IoT security.",
    img: SecureConnect,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

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

export default function DeliveredProjects() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative py-28 bg-[#020617] text-white overflow-hidden">
      {/* ==== Background Lighting ==== */}
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

      {/* ==== Header ==== */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-400 via-indigo-400 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(99,102,241,0.3)]">
          Delivered Projects Timeline
        </h2>
        <p className="text-gray-400 mt-3 text-base max-w-2xl mx-auto">
          Our journey through innovation — every project defines a new frontier.
        </p>
      </div>

      {/* ==== Timeline Line ==== */}
      <div className="absolute top-[45%] left-0 right-0 h-[3px] bg-gradient-to-r from-sky-400 via-indigo-400 to-amber-200 blur-[2px] opacity-50 z-0"></div>

      {/* ==== Continuous Moving Timeline ==== */}
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
              {/* Connector */}
              <div
                className={`w-[2px] h-[100px] ${i % 2 === 0
                    ? "bg-gradient-to-t from-indigo-400 to-transparent"
                    : "bg-gradient-to-b from-indigo-400 to-transparent"
                  } opacity-50`}
              ></div>

              {/* Card */}
              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={900}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-[240px] sm:w-[260px] md:w-[280px] bg-white/10 backdrop-blur-2xl border border-white/10 hover:border-sky-400/30 rounded-3xl shadow-[0_0_30px_rgba(56,189,248,0.1)] overflow-hidden cursor-pointer group transition-all duration-700"
                  onClick={() => setSelected(proj)}
                >
                  <div className="w-full h-32 overflow-hidden rounded-t-3xl">
                    <img
                      src={proj.img}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <p className="text-sky-400 text-xs font-semibold tracking-wider">
                      {proj.year}
                    </p>
                    <h3 className="text-lg font-bold mt-2 text-white">
                      {proj.title}
                    </h3>
                    <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ==== Stats Section ==== */}
      {/* ==== Stats Section ==== */}
      <div className="relative z-20 mt-8">
        <div
          className="
      max-w-6xl mx-auto px-4 md:px-10 
      flex justify-center items-stretch 
      flex-wrap md:flex-nowrap 
      gap-4 sm:gap-6 md:gap-8 text-center
    "
        >
          {[
            { label: "Projects Completed", value: 40, suffix: "+" },
            { label: "AI Solutions Deployed", value: 20, suffix: "+" },
            { label: "Clients Served", value: 15, suffix: "+" },
            { label: "Ongoing Innovations", value: 8, suffix: "+" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="
          flex-1 min-w-[80px] sm:min-w-[120px] md:min-w-[180px] 
          p-4 sm:p-5 md:p-6 
          bg-white/5 backdrop-blur-xl rounded-2xl 
          border border-white/10 hover:border-sky-400/30 
          shadow-[0_0_25px_rgba(56,189,248,0.05)] 
          hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] 
          transition-all duration-500
        "
            >
              <div className="w-full">
                <CountUpOnView
                  end={stat.value}
                  suffix={stat.suffix}
                  className="
              text-2xl sm:text-3xl md:text-4xl font-extrabold 
              bg-gradient-to-r from-sky-400 via-indigo-400 to-amber-300 
              bg-clip-text text-transparent 
              drop-shadow-[0_0_20px_rgba(56,189,248,0.2)]
            "
                />
                <p className="text-gray-400 mt-1 text-[11px] sm:text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>



      {/* ==== Modal ==== */}
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
            >
              <X size={24} />
            </button>
            <img
              src={selected.img}
              alt={selected.title}
              className="w-full h-48 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">
              {selected.title}
            </h3>
            <p className="text-sky-400 text-sm mb-2">{selected.year}</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              {selected.details}
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
