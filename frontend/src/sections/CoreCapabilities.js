// ✅ CoreCapabilities.js
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet"; // 🧠 Added for SEO meta tags

function CoreCapabilities() {
  const capabilities = [
    { icon: "💻", title: "Web & App Development", desc: "Responsive, scalable apps for modern businesses." },
    { icon: "🤖", title: "AI/ML Integration", desc: "Smart systems that learn, adapt, and optimize workflows." },
    { icon: "☁️", title: "Cloud Deployment", desc: "Seamless, secure, and scalable cloud-based solutions." },
    { icon: "🧠", title: "Tech Consulting", desc: "Innovative strategies to power your digital transformation." },
    { icon: "🛡️", title: "Cybersecurity", desc: "End-to-end protection for data and digital infrastructure." },
    { icon: "📊", title: "Data Analytics", desc: "Turning complex data into actionable insights." },
    { icon: "🎨", title: "UI/UX Design", desc: "Crafting seamless, intuitive, and aesthetic experiences." },
    { icon: "⚙️", title: "Automation & RPA", desc: "Smart automation for process efficiency and speed." },
  ];

  return (
    <section
      id="core-capabilities"
      aria-label="AryahsWorld Infotech Core Capabilities Section"
      className="relative py-24 md:py-28 overflow-hidden bg-gradient-to-b from-[#f5f9ff] via-[#eef3ff] to-[#dbe8ff]"
    >
      {/* ✅ SEO META TAGS */}
      <Helmet>
        <title>Core Capabilities | AryahsWorld Infotech | AI, 6G & Digital Transformation</title>
        <meta
          name="description"
          content="Explore AryahsWorld Infotech’s core capabilities — from AI/ML integration and web development to cloud, cybersecurity, and data analytics solutions."
        />
        <meta
          name="keywords"
          content="AryahsWorld Infotech, AI company, 6G solutions, cloud deployment, cybersecurity, data analytics, automation, web development, digital transformation"
        />
        <link rel="canonical" href="https://aryahsworld.com/capabilities" />

        {/* ✅ Open Graph for social sharing */}
        <meta property="og:title" content="Core Capabilities | AryahsWorld Infotech" />
        <meta
          property="og:description"
          content="Discover the core strengths of AryahsWorld Infotech in AI, 6G, automation, and digital transformation."
        />
        <meta property="og:image" content="/assets/ai-capabilities.jpg" />
        <meta property="og:url" content="https://aryahsworld.com/capabilities" />
      </Helmet>

      {/* === Floating Background Glows === */}
      <motion.div
        className="absolute -top-32 -left-20 w-[450px] h-[450px] bg-gradient-to-br from-blue-300/30 to-indigo-300/20 rounded-full blur-[120px]"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-gradient-to-tl from-yellow-200/25 to-blue-200/25 rounded-full blur-[150px]"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* === Section Heading === */}
      <div className="relative z-10 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 via-indigo-600 to-yellow-400 text-transparent bg-clip-text"
        >
          🚀 Our Core Capabilities 
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto"
        >
          Empowering global businesses with AI-driven design, automation, and 6G innovation —
          the foundation of next-generation digital transformation.
        </motion.p>
      </div>

      {/* === Infinite Motion Carousel === */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6 md:gap-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 45,
            ease: "linear",
          }}
        >
          {[...capabilities, ...capabilities].map((cap, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.07,
                rotateX: 6,
                rotateY: -6,
                boxShadow: "0 0 40px rgba(59,130,246,0.25)",
              }}
              className="group relative min-w-[240px] md:min-w-[280px] bg-white/40 backdrop-blur-xl border border-transparent rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.05)] hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Gradient Icon Container */}
              <div
                className="relative w-16 h-16 flex items-center justify-center mb-3 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-yellow-400 text-3xl text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:scale-110 transition-transform duration-300"
                aria-label={cap.title} // ✅ Accessible label
              >
                <span>{cap.icon}</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-50 blur-md" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#002060] group-hover:text-blue-700 transition-colors duration-300">
                {cap.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#3b4f7e] mt-2">{cap.desc}</p>

              {/* Gradient Outline Glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-yellow-300 opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* === Edge Fades === */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f5f9ff] via-[#f5f9ff]/80 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f5f9ff] via-[#f5f9ff]/80 to-transparent pointer-events-none" />

      {/* === Ambient Lighting === */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent)]"
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}

export default CoreCapabilities;
