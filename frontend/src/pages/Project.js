import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiPlay, FiFilter } from "react-icons/fi";
import StartProjectModal from "../components/StartProjectModal"; // ✅ your existing popup file

const PROJECTS = [
  {
    id: "career-genai",
    title: "CareerGenAI",
    category: "AI",
    tagline: "AI-powered career guidance & resume insights",
    tech: ["React", "TensorFlow", "Node.js"],
    color: "bg-gradient-to-br from-purple-500 to-indigo-500",
    description:
      "Built an end-to-end AI platform to analyze resumes and recommend career paths, with a 75% increase in user match accuracy.",
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
  },
];

const categories = ["All", "AI", "Product", "Research", "Data Science"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false); // ✅ modal toggle state

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      if (filter !== "All" && p.category !== filter) return false;
      if (search && !p.title.toLowerCase().includes(search.toLowerCase()))
        return false;
      return true;
    });
  }, [filter, search]);

  return (
    <div className="relative min-h-screen text-gray-900 py-20 px-4 sm:px-8 lg:px-20 overflow-hidden">
      {/* ===== Gradient Background ===== */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f4f7ff] via-[#eef1ff] to-[#fafcff]" />

      {/* Subtle Animated Blobs */}
      <motion.div
        className="absolute w-[500px] h-[500px] top-[-180px] left-[-120px] bg-gradient-to-br from-indigo-300/40 to-purple-400/30 blur-3xl rounded-full"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] bottom-[-200px] right-[-180px] bg-gradient-to-tr from-pink-300/30 to-sky-300/30 blur-3xl rounded-full"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* ===== HERO ===== */}
      <header className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-8 mt-10">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-semibold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-transparent bg-clip-text"
          >
            Our Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12 }}
            className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed"
          >
            Carefully crafted projects — from high-impact AI systems to full-stack products
            and research prototypes. Explore case studies, technology stacks, and impact.
          </motion.p>

          {/* Filter and Search */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 flex flex-wrap gap-3 items-center"
          >
            <div className="flex items-center gap-2 p-1 rounded-lg bg-gray-50 border shadow-sm">
              <FiFilter className="text-gray-500" />
              <span className="text-sm text-gray-600">Filter</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 text-sm rounded-full font-medium transition-shadow ${
                    filter === c
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                      : "bg-white text-gray-700 border hover:bg-gray-50"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="ml-auto flex items-center gap-2 w-full sm:w-auto">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects..."
                className="px-4 py-2 border rounded-lg text-sm w-full sm:w-56 focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-white shadow-sm"
              />
            </div>
          </motion.div>
        </div>

        {/* Quick Stats / CTA */}
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.18 }}
          className="w-full sm:w-[80%] lg:w-64 bg-white/90 backdrop-blur border rounded-2xl p-6 shadow-md hover:shadow-lg transition"
        >
          <div className="text-sm text-gray-500">Projects Completed</div>
          <div className="flex items-baseline gap-3 mt-2">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-3xl font-bold text-indigo-700"
            >
              {PROJECTS.length}
            </motion.div>
            <div className="text-xs text-gray-500">+ ongoing</div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => setShowModal(true)} // ✅ trigger popup
              className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform"
            >
              Start a Project
            </button>
          </div>
        </motion.aside>
      </header>

      {/* ===== PROJECT GRID ===== */}
      <main className="max-w-6xl mx-auto mt-16">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
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
                <div className={`h-44 w-full ${p.color} flex items-center justify-center`}>
                  <div className="text-white text-xl font-semibold drop-shadow">{p.title}</div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{p.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{p.tagline}</p>
                    </div>
                    <div className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700">
                      {p.category}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between flex-wrap gap-2">
                    <div className="flex gap-2 text-xs text-gray-500 flex-wrap">
                      {p.tech.map((t) => (
                        <span key={t} className="px-2 py-1 bg-gray-50 rounded border border-gray-100">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <FiExternalLink className="text-gray-500" />
                      <FiPlay className="text-gray-500" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="mt-16 rounded-xl bg-gradient-to-r from-gray-50 via-white to-gray-50 p-8 flex flex-col md:flex-row items-center justify-between border shadow-sm gap-4"
        >
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold">Have a concept you want to build?</h4>
            <p className="text-sm text-gray-600 mt-1">
              We turn visionary ideas into production-grade realities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 w-full sm:w-auto">
              Talk to an expert
            </button>
            <button
              onClick={() => setShowModal(true)} // ✅ same modal trigger
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow hover:shadow-lg w-full sm:w-auto"
            >
              Start a Project
            </button>
          </div>
        </motion.div>
      </main>

      {/* ===== PROJECT DETAIL MODAL ===== */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/30 backdrop-blur-sm"
          >
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
                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center gap-2">
                      <FiExternalLink /> Live Demo
                    </button>
                    <button
                      onClick={() => setSelected(null)}
                      className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                    >
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

      {/* ===== START PROJECT MODAL (Imported Component) ===== */}
      <StartProjectModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
