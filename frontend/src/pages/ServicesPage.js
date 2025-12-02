import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiShield,
  FiCpu,
  FiSmartphone,
  FiDatabase,
  FiFeather,
  FiLayers,
  FiExternalLink,
  FiX,
} from "react-icons/fi";

import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import StartProjectModal from "../components/StartProjectModal";

// 🔹 Assets
import Men1 from "../assets/robot1.gif";
import Career_Couns from "../assets/career_couns.jpg";
import Caro1 from "../assets/caro1.png";
import Caro2 from "../assets/caro2.png";
import BailgadiImg from "../assets/balgadi.png";
import agri from "../assets/agri.jpg";
import studio from "../assets/studio.jpg";
import AI from "../assets/AI.jpg";
import trans from "../assets/trans.jpg";





export default function ServicesPage() {
  // ====== DATA ======
  const services = [
    { id: 1, title: "AI & Machine Learning", desc: "Custom models, data pipelines & MLOps", icon: <FiCpu size={28} /> },
    { id: 2, title: "6G Secure Data Transfer", desc: "Low-latency secure protocols for 6G", icon: <FiShield size={28} /> },
    { id: 3, title: "Web & App Development", desc: "Scalable full-stack development", icon: <FiSmartphone size={28} /> },
    { id: 4, title: "Data Science Solutions", desc: "Analytics, dashboards & insights", icon: <FiDatabase size={28} /> },
    { id: 5, title: "Cloud & DevOps", desc: "Cloud infra, CI/CD & monitoring", icon: <FiLayers size={28} /> },
    { id: 6, title: "UI/UX Design", desc: "Design systems, prototypes & testing", icon: <FiFeather size={28} /> },
  ];

  const stats = [
    { id: 1, value: 43, label: "Projects Completed" },
    { id: 2, value: 50, label: "Active Clients" },
    { id: 3, value: 12, label: "Years Experience" },
    { id: 4, value: 25, label: "Technologies Used" },
  ];

  const projects = [
    { id: 1, title: "CareerGenAI", subtitle: "AI-Powered Career Platform", img: Career_Couns, link: "https://aryahsworld.com/careergenai" },
    { id: 2, title: "6G Secure Link", subtitle: "Secure Data Channel for 6G", img: Caro1, link: "https://aryahsworld.com/6g-secure" },
    { id: 3, title: "GenAI Toolset", subtitle: "Enterprise GenAI Solutions", img: Caro2, link: "https://aryahsworld.com/genai" },
    { id: 4, title: "Bailgada Trading App", subtitle: "Traditional Smart Trading Platform", img: BailgadiImg },

  ];

  // ====== PROJECT PAGE DATA ======
  const PROJECTS = [
    {
  id: "career-genai",
  title: "CareerGenAI",
  category: "AI",
  tagline: "AI-powered career guidance & resume insights",
  tech: ["React", "TensorFlow", "Node.js"],
  color: "bg-gradient-to-br from-purple-500 to-indigo-500",
  description:
    "CareerGenAI is an AI-powered platform designed to guide students from Class 5 to Graduation in selecting the right career path based on their interests, strengths, skills, and academic background. It provides personalized career suggestions and career roadmaps using AI.",
  
  // ✅ FIXED WORKING EMBED LINK
  demoVideo: "https://www.youtube.com/embed/Crynb2zFYWE?si=-uvcn5x_Fi6TxK95",

  img: AI
},
    {
      id: "6g-secure",
      title: "6G Secure Data Transfer",
      category: "Research",
      tagline: "Lightweight AI intrusion detection for 6G IoT.",
      tech: ["TensorFlow Lite", "Flower", "Keras"],
      color: "bg-gradient-to-br from-yellow-400 to-orange-500",
      description:
        "A quantized LSTM model for low-resource IDS with federated learning, optimized for edge devices.",
  demoVideo: "https://www.youtube.com/embed/Crynb2zFYWE?si=-uvcn5x_Fi6TxK95",
      img: trans
    },
    {
      id: "genai-studio",
      title: "GenAI Studio",
      category: "Product",
      tagline: "AI content generation suite for teams",
      tech: ["Next.js", "Redis", "Python"],
      color: "bg-gradient-to-br from-green-400 to-teal-500",
      description:
        "A collaborative GenAI platform for marketing teams with templates, versioning and analytics.",
  demoVideo: "https://www.youtube.com/embed/Crynb2zFYWE?si=-uvcn5x_Fi6TxK95",
      img: studio
    },
    {
      id: "agri-yield",
      title: "AgriYield Pro",
      category: "Data Science",
      tagline: "Deep learning crop yield prediction",
      tech: ["PyTorch", "OpenCV", "Pandas"],
      color: "bg-gradient-to-br from-blue-400 to-indigo-600",
      description:
        "Yield prediction pipeline that combines imagery and phenotype data to estimate yields with high accuracy.",
  demoVideo: "https://www.youtube.com/embed/Crynb2zFYWE?si=-uvcn5x_Fi6TxK95",
      img: agri
    },
    {
      id: "bailgada-trading",
      title: "Bailgada Trading App",
      category: "Product",
      tagline: "Smart digital platform for traditional rural trading",
      tech: ["Flutter", "Firebase", "GeoTracking"],
      color: "bg-gradient-to-br from-red-500 to-pink-500",
      description:
        "A modern trading app inspired by traditional bailgada commerce, enabling rural buyers and sellers to connect, trade, and track goods with smart digital features.",
  demoVideo: "https://www.youtube.com/embed/Crynb2zFYWE?si=-uvcn5x_Fi6TxK95",
      img: BailgadiImg
    },
  ];


  const categories = ["All", "AI", "Product", "Research", "Data Science"];
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  // NEW state: stores currently-open video embed URL (or null)
  const [showVideo, setShowVideo] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      if (filter !== "All" && p.category !== filter) return false;
      if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [filter, search, PROJECTS]);




  // ====== PAGE START ======
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f8f7ff] via-[#eef2ff] to-[#e0e7ff] text-slate-800 overflow-hidden pt-32">
      {/* Animated Blobs */}
      <motion.div className="absolute -top-32 -left-20 w-96 h-96 rounded-full mix-blend-multiply blur-3xl animate-blob bg-gradient-to-tr from-violet-400 via-fuchsia-400 to-pink-400 opacity-30" />
      <motion.div className="absolute top-40 right-20 w-96 h-96 rounded-full mix-blend-multiply blur-3xl animate-blob bg-gradient-to-tl from-blue-400 via-cyan-400 to-teal-300 opacity-30" />
      <motion.div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full mix-blend-multiply blur-3xl animate-blob bg-gradient-to-br from-indigo-400 via-violet-400 to-pink-400 opacity-25" />

      {/* 🌟 HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-10 z-10">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500">
            Empowering Businesses Through Smart Technology
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            We build scalable AI-driven solutions, secure 6G data transfer systems, and modern web & mobile applications
            that accelerate growth and protect your data.
          </p>
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-lg hover:scale-105 transition"
            >
              Get a Quote
            </button>
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-2xl border border-slate-200 text-slate-700 hover:bg-slate-100 transition"
            >
              Explore Projects
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1 relative">
          <motion.img src={Men1} alt="Hero" className="max-h-72 object-contain mx-auto drop-shadow-2xl" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        </motion.div>
      </section>

      {/* ✨ OUR SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <motion.div key={s.id} whileHover={{ scale: 1.03 }} className="relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-2xl transition overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-100 to-blue-50 opacity-0 hover:opacity-40 transition rounded-2xl"></div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-violet-50 flex items-center justify-center text-violet-600">{s.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="text-sm text-slate-500">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💼 FEATURED PROJECTS (Like Screenshot) */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-500">
          Featured Projects
        </h2>

        <Swiper
          spaceBetween={25}
          grabCursor={true}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          {projects.map((p) => (
            <SwiperSlide key={p.id}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition border border-slate-100 cursor-pointer h-full"
              >
                <div className="h-48 overflow-hidden flex items-center justify-center bg-slate-50">
                  <img src={p.img} alt={p.title} className="object-cover h-full w-full" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-slate-800">{p.title}</h3>
                  <p className="text-slate-500 mt-1">{p.subtitle}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>


      {/* 💬 CTA: Start a Project */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-lg rounded-2xl border border-slate-200 shadow-lg p-10"
        >
          <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Have a vision in mind?
          </h3>
          <p className="text-slate-600 mt-2 mb-6 max-w-md mx-auto">
            Let’s collaborate and bring your innovative idea to life.
            We specialize in AI, 6G research, and scalable tech solutions.
          </p>

          <div className="mt-6">
            <button
              onClick={() => setShowModal(true)}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform"
            >
              Start a Project
            </button>
          </div>
        </motion.div>
      </section>

      {/* 🌟 FULL PROJECT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Our Projects
        </motion.h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 text-sm rounded-full font-medium transition ${filter === c ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow" : "bg-white text-gray-700 border hover:bg-gray-50"
                }`}
            >
              {c}
            </button>
          ))}
         
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ delay: i * 0.04 }}
                key={p.id}
                className="group bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-gray-100 cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all"
                onClick={() => setSelected(p)}
              >
                <div className="h-44 w-full overflow-hidden flex items-center justify-center bg-slate-50">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="object-cover h-full w-full"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{p.tagline}</p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2 py-1 bg-gray-50 rounded border border-gray-100 text-xs text-gray-500">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 🌟 WHY CHOOSE US */}
      <section className="bg-white/70 backdrop-blur-lg py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500">
              Why Choose Aryahs
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li>✔ Cutting-edge AI-driven innovation</li>
              <li>✔ Experienced engineers & data scientists</li>
              <li>✔ Custom scalable solutions</li>
              <li>✔ 100% data privacy guaranteed</li>
            </ul>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((st) => (
                <div key={st.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
                  <div className="text-3xl font-extrabold text-violet-600">
                    <CountUp end={st.value} duration={2} />+
                  </div>
                  <div className="text-sm text-slate-500 mt-1">{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/30 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, y: 12, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 12, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden border"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-800">{selected.title}</h2>
                  <p className="text-gray-600 mt-3">{selected.description}</p>

                  <div className="mt-6">
                    <div className="text-sm text-gray-500">Tech Stack</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selected.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-gray-100 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3 flex-wrap">
                    {/* Live Demo: opens a separate video modal (keeps project modal open until the user closes it) */}
                    <button
                      onClick={() => setShowVideo(selected.demoVideo || "https://www.youtube.com/embed/dQw4w9WgXcQ")}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center gap-2"
                    >
                      <FiExternalLink /> Live Demo
                    </button>
                    <button onClick={() => setSelected(null)} className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
                      Close
                    </button>
                  </div>
                </div>
                <div className="relative bg-gray-50 p-6 flex items-center justify-center">
                  <div className={`w-full h-64 rounded-xl ${selected.color} flex items-center justify-center`}>
                    <div className="text-white font-semibold text-xl">{selected.title}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal (separate) */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden"
            >
              <div className="relative">
                <button
                  onClick={() => setShowVideo(null)}
                  className="absolute top-3 right-3 z-20 bg-white rounded-full p-2 shadow"
                  aria-label="Close video"
                >
                  <FiX size={18} />
                </button>

                <div className="w-full h-[60vh] md:h-[70vh] bg-black">
                  {/* iframe src expects an embed url (youtube embed, vimeo embed, or your hosted mp4 via player) */}
                  <iframe
                    src={showVideo}
                    title="Project Demo"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="p-4 text-right">
                <button
                  onClick={() => setShowVideo(null)}
                  className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200"
                >
                  Close Video
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Start Project Modal */}
      <StartProjectModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}