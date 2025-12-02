"use client";
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet"; // ✅ Add this for SEO metadata
import menGif from "../assets/men1.gif";

function ServicesSection() {
  const services = [
     {
      title: "Web & App Development",
      desc: "Creating seamless, responsive web and mobile applications that fuse innovation, design, and scalability for modern businesses.",
      icon: "💻",
    },
    {
      title: "AI & Machine Learning",
      desc: "A machine learning and deep learning–based system that predicts crop yield using processed genotype and phenotype data.",
      icon: "🤖",
    },
    {
      title: "IoT Connectivity",
      desc: "Designing next-gen 6G and IoT infrastructures for real-time communication, smart automation, and ultra-fast connectivity.",
      icon: "🌐",
    },
   
  ];

  return (
    <section
      id="services"
      aria-label="Our Services - Aryahs World Infotech"
      className="relative w-full py-24 md:py-28 overflow-hidden bg-gradient-to-b from-[#f5f9ff] via-[#eaf2ff] to-[#dbe8ff] text-[#001b3e]"
    >
      {/* ✅ SEO Meta Information */}
      <Helmet>
        <title>Our Services | Aryahs World Infotech</title>
        <meta
          name="description"
          content="Explore Aryahs World Infotech services in AI, Machine Learning, 6G, IoT, and Web Development. We empower businesses through automation, innovation, and intelligent technology."
        />
        <meta
          name="keywords"
          content="AI services, Machine Learning, 6G technology, IoT solutions, web development, app development, Aryahs World Infotech"
        />
        <meta property="og:title" content="Our Services - Aryahs World Infotech" />
        <meta
          property="og:description"
          content="Transform your business with Aryahs World Infotech’s AI, 6G, IoT, and Web Development services. Innovation meets automation."
        />
        <meta property="og:image" content="/images/og-services.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aryahs-world-infotech.com/services" />
      </Helmet>

      {/* ---------- Animated Background ---------- */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#fff7d6]/40 via-[#e8f0ff]/50 to-[#fefbd0]/40 blur-[120px]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "300% 300%" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-16 items-center">
        {/* ---------- LEFT CONTENT ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col space-y-10"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold mb-4"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-[#0048ba] via-[#007bff] to-[#ffd700] text-transparent bg-clip-text">
                Services
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-[#1a3262] max-w-xl leading-relaxed"
            >
              At <strong>Aryahs World Infotech</strong>, we combine{" "}
              <strong>AI, automation, and 6G innovation</strong> to design
              digital products that transform businesses globally.
            </motion.p>
          </div>

   
          <div className="grid gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="relative group bg-white/50 backdrop-blur-lg border border-[#007bff]/20 hover:border-[#ffd700]/70 rounded-2xl p-6 shadow-[0_0_25px_rgba(0,64,255,0.05)] transition-all duration-500"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{service.icon}</span>
                  <h3 className="text-xl font-semibold text-[#002060]">
                    {service.title}
                  </h3>
                </div>

                <p className="text-[#2b3f73] mt-3">{service.desc}</p>

                {/* Hover Glow */}
                <motion.div
                  className="absolute -inset-px bg-gradient-to-r from-[#ffd700] to-[#007bff] rounded-2xl opacity-0 group-hover:opacity-15 transition-all duration-500 blur-md"
                ></motion.div>
              </motion.div>
            ))}
          </div>
          
        </motion.div>
        

        {/* ---------- RIGHT SIDE ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex justify-center md:justify-end"
        >
          {/* Amoeba Shape */}
          <svg
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-[750px] h-[750px] -top-28 right-[-80px] -z-10"
          >
            <path
              fill="url(#blobGradient)"
              d="M300,520Q260,600,180,540Q100,480,100,360Q100,240,180,180Q260,120,340,160Q420,200,460,280Q500,360,440,440Q380,520,300,520Z"
            />
            <defs>
              <linearGradient id="blobGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#6366f1" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#facc15" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Aura Glow */}
          <div className="absolute w-[900px] h-[900px] bg-gradient-to-tl from-[#ffd700]/25 via-[#3b82f6]/20 to-transparent rounded-full blur-[180px] -top-40 right-[-120px] -z-20" />

          {/* Animated GIF */}
          <motion.img
            src={menGif}
            alt="AI and Technology Services by Aryahs World Infotech"
            className="relative w-[450px] md:w-[480px] object-contain drop-shadow-[0_0_25px_rgba(255,215,0,0.4)]"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.05,
              filter: "drop-shadow(0 0 30px rgba(255,223,0,0.5))",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;
