"use client";
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { CheckCircle, Shield, Cpu, Zap } from "lucide-react";

// === SEO-Optimized Keywords & Phrases ===
// Keywords naturally integrated in titles and text for AI, Cloud, IoT, and security.

const reasons = [
  {
    icon: <Cpu className="w-8 h-8 text-yellow-400" />,
    title: "Cutting-Edge AI Innovation",
    desc: "Aryahs World Infotech builds advanced AI and machine learning solutions designed to scale seamlessly and adapt to future technology demands.",
    gradient: "from-blue-500/20 via-indigo-600/20 to-yellow-500/20",
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-300" />,
    title: "Security & Reliability",
    desc: "Our intelligent systems are developed with enterprise-grade encryption, privacy-first models, and top-tier reliability for every project.",
    gradient: "from-indigo-500/20 via-blue-600/20 to-blue-400/20",
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-300" />,
    title: "Performance & Efficiency",
    desc: "We optimize AI and IoT ecosystems for lightning-fast performance, low latency, and resource efficiency — perfect for next-gen 6G networks.",
    gradient: "from-yellow-400/20 via-yellow-500/20 to-blue-500/20",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-indigo-300" />,
    title: "Trusted Expertise",
    desc: "Our experienced team integrates AI, IoT, and secure cloud infrastructure — delivering scalable and innovative digital solutions worldwide.",
    gradient: "from-blue-500/20 via-indigo-700/20 to-indigo-400/20",
  },
];

export default function WhyChooseUs() {
  return (
    <>
      {/* === SEO Meta Tags === */}
      <Helmet>
        <title>Why Choose Aryahs World Infotech | AI & Cloud Experts</title>
        <meta
          name="description"
          content="Discover why businesses choose Aryahs World Infotech — leaders in AI, IoT, cloud technology, and secure software innovation. Build your digital future with us."
        />
        <meta
          name="keywords"
          content="Aryahs World Infotech, AI development, cloud computing, IoT solutions, AI innovation, machine learning, secure software, digital transformation"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Why Choose Aryahs World Infotech | AI & Cloud Experts" />
        <meta
          property="og:description"
          content="Explore the reasons clients trust Aryahs World Infotech — experts in AI, IoT, and secure cloud solutions for tomorrow's technology."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aryahsinfotech.com/why-choose-us" />
        <meta property="og:site_name" content="Aryahs World Infotech" />
      </Helmet>

      {/* === Section === */}
      <section
        id="why-choose-us"
        className="relative py-28 bg-[#05060d] text-white overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,30,80,0.3),rgba(0,0,0,0.9))]" />
        <motion.div
          className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Header */}
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
            🌟 Why Choose Us
          </h2>
          <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
            Aryahs World Infotech delivers AI, IoT, and cloud-based innovations that redefine digital performance, security, and scalability.
          </p>
        </div>

        {/* Cards */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12 lg:px-20">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(99,102,241,0.35)",
              }}
              className={`relative bg-gradient-to-br ${reason.gradient} border border-blue-500/20 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-start shadow-[0_0_15px_rgba(0,0,60,0.4)] transition-all duration-500`}
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-blue-200 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Glow */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0c18] to-transparent opacity-70"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>
    </>
  );
}
