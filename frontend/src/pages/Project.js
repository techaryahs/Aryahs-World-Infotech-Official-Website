// src/pages/Projects.jsx
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiFilter } from "react-icons/fi";
import { Helmet } from "react-helmet";
import StartProjectModal from "../components/StartProjectModal";

const PROJECTS = [
  {
    id: "career-genai",
    title: "CareerGenAI",
    category: "AI",
    tagline: "AI-powered career guidance & resume insights",
    tech: ["React", "TensorFlow", "Node.js"],
    color: "bg-gradient-to-br from-purple-500 to-indigo-500",
    description:
      "An AI-driven career guidance platform that analyzes resumes and recommends optimized career paths with 75% improved accuracy.",
    url: "https://www.aryahsworld.com/projects/career-genai",
  },
  {
    id: "6g-secure",
    title: "6G Secure Data Transfer",
    category: "Research",
    tagline: "Lightweight AI intrusion detection for 6G IoT",
    tech: ["TensorFlow Lite", "Flower", "Keras"],
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    description:
      "A quantized LSTM-based model that detects intrusions using federated learning optimized for 6G edge devices.",
    url: "https://www.aryahsworld.com/projects/6g-secure",
  },
  {
    id: "genai-studio",
    title: "GenAI Studio",
    category: "Product",
    tagline: "AI content generation suite for teams",
    tech: ["Next.js", "Redis", "Python"],
    color: "bg-gradient-to-br from-green-400 to-teal-500",
    description:
      "A collaborative AI content generation suite with analytics, templates, and real-time team editing.",
    url: "https://www.aryahsworld.com/projects/genai-studio",
  },
  {
    id: "agri-yield",
    title: "AgriYield Pro",
    category: "Data Science",
    tagline: "Deep learning crop yield prediction",
    tech: ["PyTorch", "OpenCV", "Pandas"],
    color: "bg-gradient-to-br from-blue-400 to-indigo-600",
    description:
      "An AI-driven pipeline predicting crop yields using hybrid image and phenotype data for precision agriculture.",
    url: "https://www.aryahsworld.com/projects/agri-yield",
  },
];

const categories = ["All", "AI", "Product", "Research", "Data Science"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      if (filter !== "All" && p.category !== filter) return false;
      if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [filter, search]);

  return (
    <main
      className="relative min-h-screen text-gray-900 py-20 px-4 sm:px-8 lg:px-20 overflow-hidden"
      role="main"
    >
      {/* ✅ SEO META TAGS */}
      <Helmet>
        <title>Projects | Aryahs World Infotech – AI, Research & Innovation</title>
        <meta
          name="description"
          content="Explore AI projects, 6G research, and full-stack product innovations by Aryahs World Infotech — building the future with technology."
        />
        <meta
          name="keywords"
          content="Aryahs World projects, AI systems, 6G research, GenAI Studio, CareerGenAI, AgriYield Pro, AI company India"
        />
        <link rel="canonical" href="https://www.aryahsworld.com/projects" />
        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Projects | Aryahs World Infotech – AI, Research & Innovation" />
        <meta
          property="og:description"
          content="Explore AI projects, 6G research, and product innovations from Aryahs World Infotech."
        />
        <meta property="og:url" content="https://www.aryahsworld.com/projects" />
        <meta property="og:site_name" content="Aryahs World Infotech" />
        <meta property="og:image" content="https://www.aryahsworld.com/assets/projects-cover.jpg" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects | Aryahs World Infotech" />
        <meta
          name="twitter:description"
          content="Discover cutting-edge AI, research, and product innovations by Aryahs World Infotech."
        />
        <meta name="twitter:image" content="https://www.aryahsworld.com/assets/projects-cover.jpg" />

        {/* ✅ Schema Markup (JSON-LD) */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Projects | Aryahs World Infotech",
            "description": "Showcasing AI and research projects from Aryahs World Infotech.",
            "url": "https://www.aryahsworld.com/projects",
            "publisher": {
              "@type": "Organization",
              "name": "Aryahs World Infotech",
              "url": "https://www.aryahsworld.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.aryahsworld.com/assets/logo.png"
              }
            },
            "about": ${JSON.stringify(
              PROJECTS.map((p) => ({
                "@type": "CreativeWork",
                name: p.title,
                description: p.description,
                url: p.url,
                applicationCategory: p.category,
              }))
            )}
          }
        `}</script>
      </Helmet>

      {/* ===== Background ===== */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f4f7ff] via-[#eef1ff] to-[#fafcff]" />

      {/* ===== HERO ===== */}
      <header className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-8 mt-10">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-transparent bg-clip-text"
          >
            Our Projects
          </motion.h1>

          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
            Discover our journey through cutting-edge AI solutions, research prototypes, and scalable tech products.
          </p>

          {/* Filter + Search */}
          <div className="mt-6 flex flex-wrap gap-3 items-center" aria-label="Filter and search projects">
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
                  aria-pressed={filter === c}
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
                aria-label="Search projects"
              />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <aside
          className="w-full sm:w-[80%] lg:w-64 bg-white/90 backdrop-blur border rounded-2xl p-6 shadow-md"
          aria-label="Project statistics"
        >
          <div className="text-sm text-gray-500">Projects Completed</div>
          <div className="flex items-baseline gap-3 mt-2">
            <div className="text-3xl font-bold text-indigo-700">{PROJECTS.length}</div>
            <div className="text-xs text-gray-500">+ ongoing</div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => setShowModal(true)}
              className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md hover:shadow-lg transition"
            >
              Start a Project
            </button>
          </div>
        </aside>
      </header>

      {/* ===== PROJECT GRID ===== */}
      <section
        className="max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        aria-label="Project gallery"
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
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <meta itemProp="name" content={p.title} />
              <meta itemProp="description" content={p.description} />
              <div className={`h-44 w-full ${p.color} flex items-center justify-center`}>
                <div className="text-white text-xl font-semibold drop-shadow">{p.title}</div>
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold" itemProp="headline">
                  {p.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{p.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-gray-50 rounded border border-gray-100">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="mt-16 max-w-5xl mx-auto text-center border rounded-xl bg-gradient-to-r from-gray-50 via-white to-gray-50 p-10 shadow-sm">
        <h2 className="text-xl font-semibold">Have a concept you want to build?</h2>
        <p className="text-sm text-gray-600 mt-2">
          Turn your visionary ideas into production-grade AI systems with Aryahs World Infotech.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
            Talk to an expert
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow hover:shadow-lg"
          >
            Start a Project
          </button>
        </div>
      </section>

      {/* ===== Project Detail Modal ===== */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/30 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
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
                    <a
                      href={selected.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center gap-2"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                    <button
                      onClick={() => setSelected(null)}
                      className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                    >
                      Close
                    </button>
                  </div>
                </div>

                <div className="relative bg-gray-50 p-6 flex items-center justify-center">
                  <div
                    className={`w-full h-64 rounded-xl ${selected.color} flex items-center justify-center`}
                  >
                    <div className="text-white font-semibold text-xl">{selected.title}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Start Project Modal ===== */}
      <StartProjectModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </main>
  );
}
