// src/pages/AboutV2.jsx
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Globe2, Rocket } from "lucide-react";
import aboutImg from "../assets/caro2.png"; // keep or replace
import robotGif from "../assets/robot.gif"; // animated robot sprite or gif

export default function AboutV2() {
  const navigate = useNavigate();

  // Cursor-following robot motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const robotX = useTransform(mouseX, (v) => `${v}px`);
  const robotY = useTransform(mouseY, (v) => `${v}px`);
  const robotTilt = useTransform(mouseX, [-300, 300], [-8, 8]);

  // parallax on scroll
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 600], [0, -40]);
  const blobsParallax = useTransform(scrollY, [0, 800], [0, 120]);

  // refs
  const heroRef = useRef(null);

  // follow mouse relative to hero container
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    function handleMove(e) {
      const rect = el.getBoundingClientRect();
      // center-based coordinates
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / 10; // dampen
      const dy = (e.clientY - cy) / 12;
      mouseX.set(dx);
      mouseY.set(dy);
    }

    function handleLeave() {
      // reset smoothly
      mouseX.set(0);
      mouseY.set(0);
    }

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [mouseX, mouseY]);

  // Timeline items
  const timeline = [
    { year: "2021", title: "Founded", desc: "Aryahs World Infotech established — mission: AI + UX." },
    { year: "2022", title: "CareerGenAI", desc: "Launched CareerGenAI — resume insights & recommendations." },
    { year: "2023", title: "Federated 6G Research", desc: "Lightweight IDS & federated learning for 6G IoT." },
    { year: "2024", title: "AgriYield Pro", desc: "Crop yield prediction combining imagery & phenotype." },
  ];

  // Tech stack for marquee
  const techs = ["React", "Next.js", "TensorFlow", "PyTorch", "Node.js", "MongoDB", "Redis", "Flower", "TF Lite"];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#fbfbff] to-[#eef6ff] text-slate-800">
      {/* Top thin progress (subtle) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400/80"
        style={{ scaleX: 0.0001 }} // optional visual anchor; you can link to scroll if desired
      />

      {/* Animated background blobs */}
      <motion.div
        style={{ y: blobsParallax }}
        className="pointer-events-none absolute -left-36 -top-28 w-96 h-96 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-pink-400 via-violet-400 to-indigo-400"
        animate={{ rotate: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ y: blobsParallax }}
        className="pointer-events-none absolute -right-28 top-40 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-25 bg-gradient-to-br from-cyan-300 via-blue-300 to-indigo-200"
        animate={{ rotate: [0, -8, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* HERO */}
      <section
        ref={heroRef}
        className="min-h-[60vh] flex items-center justify-center px-6 md:px-12 relative z-20"
      >
        <motion.div
          className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          style={{ y: heroParallax }}
        >
          {/* Left: Headline & copy */}
          <div className="relative z-30 py-12">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-500"
            >
              About Aryahs World
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.7 }}
              className="mt-4 text-slate-600 max-w-xl"
            >
              We build intelligent, privacy-first systems — combining research-grade AI,
              low-resource 6G solutions, and beautiful product experiences.
            </motion.p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => navigate("/contact")}
                className="rounded-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-md hover:scale-[1.02] transition"
              >
                Contact Us
              </button>

              <button
                onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
                className="rounded-full px-5 py-3 bg-white border border-slate-200 text-slate-700 shadow-sm hover:shadow-md transition"
              >
                Our Journey
              </button>
            </div>

            {/* small quick stats */}
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <span className="text-indigo-600 font-semibold">100+</span> AI Deployments
              </div>
              <div className="flex items-center gap-2">
                <span className="text-indigo-600 font-semibold">150+</span> Projects
              </div>
              <div className="flex items-center gap-2">
                <span className="text-indigo-600 font-semibold">12+</span> Countries
              </div>
            </div>
          </div>

          {/* Right: Interactive Robot + small card */}
          <div className="relative flex items-center justify-center">
            {/* Robot visual - follows cursor */}
            <motion.div
              style={{ x: robotX, y: robotY, rotate: robotTilt }}
              className="relative w-44 h-44 md:w-56 md:h-56 pointer-events-none"
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
            >
              <img
                src={robotGif}
                alt="robot"
                className="w-full h-full object-contain drop-shadow-2xl"
                draggable={false}
              />

              {/* emotive speech bubble (appear on hover/cursor) */}
              <motion.div
                className="absolute -top-6 right-0 bg-white/90 text-sm px-3 py-1 rounded-full shadow-sm text-slate-800"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi 👋
              </motion.div>
            </motion.div>

            {/* subtle card behind robot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.12 }}
              className="absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 w-[86%] md:w-[70%] bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 text-white flex items-center justify-center font-semibold">
                  AI
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-800">Research-driven AI</div>
                  <div className="text-xs text-slate-500">Federated learning · LITE-ID · TinyML</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT CARD */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="bg-white/90 backdrop-blur rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
          <div className="md:flex md:items-center md:gap-8">
            <img src={aboutImg} alt="about" className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover shadow-2xl border-4 border-white" />
            <div className="mt-4 md:mt-0">
              <h3 className="text-2xl font-semibold">About Aryahs World Infotech</h3>
              <p className="mt-2 text-slate-600 max-w-2xl">
                We bring together multidisciplinary teams to solve complex problems — building
                production-ready AI systems and privacy-preserving distributed learning solutions.
              </p>
              <div className="mt-4 flex gap-4 text-sm text-slate-500">
                <div>🏢 Founded 2021</div>
                <div>🌍 Global Clients</div>
                <div>🔒 Privacy-first</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE / JOURNEY */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <h3 className="text-2xl font-semibold text-center">Our Journey</h3>
        <p className="text-sm text-slate-500 text-center mt-2">Milestones that shaped Aryahs World</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* vertical timeline on left, details on right (responsive collapse) */}
          <div className="hidden md:block relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 to-violet-400/60" />
            <ul className="space-y-8 pl-12">
              {timeline.map((t, i) => (
                <motion.li
                  key={t.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center border border-slate-100">
                      <div className="text-indigo-600 font-semibold">{t.year}</div>
                    </div>
                    <div>
                      <div className="font-medium text-slate-800">{t.title}</div>
                      <div className="text-sm text-slate-500">{t.desc}</div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* timeline list (mobile + desktop right column) */}
          <div className="md:col-span-1">
            <ul className="space-y-6 md:space-y-8">
              {timeline.map((t, i) => (
                <motion.li
                  key={t.year}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white/90 backdrop-blur rounded-2xl p-4 shadow-md border border-slate-100"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm text-indigo-600 font-semibold">{t.year}</div>
                      <div className="font-medium text-slate-800">{t.title}</div>
                      <div className="text-sm text-slate-500 mt-1">{t.desc}</div>
                    </div>
                    <div className="text-xs text-slate-400">{i + 1}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* On wide screens, show timeline vertical beside details */}
          <div className="md:hidden col-span-1">
            {/* For small screens, show condensed timeline bullets */}
            <ul className="space-y-4">
              {timeline.map((t, i) => (
                <motion.li key={t.year} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-semibold">{t.year}</div>
                    <div>
                      <div className="font-medium text-slate-800">{t.title}</div>
                      <div className="text-sm text-slate-500">{t.desc}</div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TECH STACK MARQUEE */}
      <section className="py-10 bg-gradient-to-r from-white/60 to-white/30">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h4 className="text-lg font-semibold text-center">Tech & Tools</h4>
          <p className="text-sm text-slate-500 text-center mt-2">Tools we use to build reliable, scalable systems</p>

          <div className="mt-6 overflow-hidden">
            {/* marquee effect: two rows moving opposite directions */}
            <motion.div
              className="flex gap-6 items-center py-4"
              animate={{ x: ["0%", "-35%"] }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            >
              {Array.from({ length: 2 }).flatMap(() =>
                techs.map((t) => (
                  <div key={t + Math.random()} className="min-w-[120px] px-4 py-3 bg-white/90 backdrop-blur rounded-xl border border-slate-100 shadow-sm text-center text-sm font-medium">
                    {t}
                  </div>
                ))
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold">Let's build something meaningful</h3>
          <p className="text-slate-600 mt-2">If you're exploring AI, 6G, or product development — let's talk.</p>
          <div className="mt-6 flex justify-center gap-4">
            <button onClick={() => navigate("/contact")} className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-md hover:scale-[1.02] transition">
              Contact Us
            </button>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="px-6 py-3 rounded-lg border border-slate-200 text-slate-700 bg-white">
              Back to top
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
