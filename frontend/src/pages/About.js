// src/pages/AboutV2.jsx
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import aboutImg from "../assets/caro2.png";
import robotGif from "../assets/robot.gif";
import CEO from "../assets/ceo.jpg"

export default function AboutV2() {
  const navigate = useNavigate();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const robotX = useTransform(mouseX, (v) => `${v}px`);
  const robotY = useTransform(mouseY, (v) => `${v}px`);
  const robotTilt = useTransform(mouseX, [-300, 300], [-8, 8]);
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 600], [0, -40]);
  const blobsParallax = useTransform(scrollY, [0, 800], [0, 120]);
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    function handleMove(e) {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / 10;
      const dy = (e.clientY - cy) / 12;
      mouseX.set(dx);
      mouseY.set(dy);
    }
    function handleLeave() {
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

  const timeline = [
    { year: "2021", title: "Founded", desc: "Aryahs World Infotech established — mission: AI + UX." },
    { year: "2021", title: "CareerGenAI", desc: "AI-powered resume insights and job readiness evaluation." },
    { year: "2021", title: "BooksEra", desc: "Digital reading platform with categorized content access." },
    { year: "2022", title: "TextTrasfer", desc: "Seamless real-time text transfer across devices." },
    { year: "2022", title: "Majestaystays", desc: "Premium property rental and hotel discovery system." },
    { year: "2023", title: "Security 6G Research", desc: "Lightweight IDS and federated analytics for 6G IoT." },
    { year: "2023", title: "FileTrasfer", desc: "Secure file transfer with encryption and instant delivery." },
    { year: "2023", title: "PM POSHAN", desc: "Smart nutrition and supply chain monitoring support." },
    { year: "2024", title: "AgriYield Pro", desc: "Crop yield prediction using imagery & phenotype data." }
  ];

  const techs = ["React", "Next.js", "TensorFlow", "PyTorch", "Node.js", "MongoDB", "Redis", "Flower", "TF Lite"];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#fbfbff] to-[#eef6ff] text-slate-800">

      {/* SEO */}
      <Helmet>
        <title>About Aryahs World Infotech | AI, 6G & Innovation</title>
        <meta
          name="description"
          content="Learn about Aryahs World Infotech — pioneers in AI, 6G, and scalable product development. Discover our mission, journey, and technology stack."
        />
      </Helmet>

      {/* Background blobs */}
      <motion.div
        style={{ y: blobsParallax }}
        className="pointer-events-none absolute -left-36 -top-28 w-96 h-96 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-pink-400 via-violet-400 to-indigo-400"
      />
      <motion.div
        style={{ y: blobsParallax }}
        className="pointer-events-none absolute -right-28 top-40 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-25 bg-gradient-to-br from-cyan-300 via-blue-300 to-indigo-200"
      />

      {/* HERO */}
      <section ref={heroRef} className="min-h-[60vh] flex items-center justify-center px-6 md:px-12 relative z-20">
        <motion.div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center" style={{ y: heroParallax }}>

          {/* Left */}
          <div className="relative z-30 py-12">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-500">
              About Aryahs World Infotech
            </h1>

            <p className="mt-4 text-slate-600 max-w-xl">
              We build intelligent, privacy-first systems — combining research-grade AI, low-resource 6G solutions, and beautiful product experiences.
            </p>

            <div className="mt-6 flex gap-3">
              <button onClick={() => navigate("/contact")} className="rounded-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-md">
                Contact Us
              </button>

              <button onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })} className="rounded-full px-5 py-3 bg-white border border-slate-200 text-slate-700 shadow-sm">
                Our Journey
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-500">
              <div><span className="text-indigo-600 font-semibold">4+</span> AI Deployments</div>
              <div><span className="text-indigo-600 font-semibold">150+</span> Projects</div>
              <div><span className="text-indigo-600 font-semibold">12+</span> Countries</div>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex items-center justify-center">
            <motion.img
              src={robotGif}
              alt="AI Robot"
              style={{
                x: robotX,
                y: robotY,
                rotate: robotTilt,
              }}
              className="w-44 h-44 md:w-56 md:h-56 drop-shadow-2xl"
            />

          </div>

        </motion.div>
      </section>

      {/* ABOUT CARD */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="bg-white/90 backdrop-blur rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
          <div className="md:flex md:items-center md:gap-8">
            <img src={aboutImg} alt="" className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover shadow-2xl border-4 border-white" />
            <div className="mt-4 md:mt-0">
              <h2 className="text-2xl font-semibold">About Aryahs World Infotech</h2>
              <p className="mt-2 text-slate-600 max-w-2xl">
                We bring together multidisciplinary teams to solve complex problems — building
                production-ready AI systems and privacy-preserving distributed learning solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐⭐⭐ VISION & MISSION SECTION ⭐⭐⭐ */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-slate-100"
          >
            <h3 className="text-2xl font-semibold mb-3 text-indigo-600">🌐 Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              “To lead globally in delivering intelligent, secure, and scalable digital solutions
              that empower businesses and future talent.”
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-slate-100"
          >
            <h3 className="text-2xl font-semibold mb-3 text-purple-600">🎯 Mission</h3>

            <ul className="space-y-3 text-slate-600 leading-relaxed">
              <li>1. Build innovative digital and AI-driven solutions that accelerate growth and transformation.</li>
              <li>2. Deliver secure, scalable cloud and IT services with excellence and reliability.</li>
              <li>3. Empower emerging talent through impactful internship and learning programs.</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* ⭐ PREMIUM CEO SECTION ⭐ */}
      <section className="relative max-w-6xl mx-auto px-6 md:px-12 py-16">

        {/* Soft background glow */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/80
               backdrop-blur-xl rounded-[2.5rem] p-8 md:p-14
               shadow-[0_30px_80px_-20px_rgba(79,70,229,0.25)]
               border border-white/60"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* CEO IMAGE */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="flex justify-center relative"
            >
              {/* Image halo */}
              <div
                className="absolute w-80 h-80 md:w-[22rem] md:h-[22rem]
                     rounded-full bg-gradient-to-tr from-indigo-400 to-purple-400
                     blur-3xl opacity-30"
              />

              <img
                src={CEO}
                alt="Founder and Director"
                className="relative
                     w-60 h-60 md:w-72 md:h-72
                     rounded-full
                     object-contain
                     bg-white
                     p-2
                     border-4 border-white
                     shadow-[0_30px_60px_-15px_rgba(79,70,229,0.35)]"
              />
            </motion.div>

            {/* CEO CONTENT */}
            <div>
              <span
                className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-semibold
                     bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
              >
                Leadership
              </span>

              <h3 className="text-3xl font-bold text-slate-800">
                Founder & Director
              </h3>

              <h4
                className="mt-1 text-xl font-semibold bg-clip-text text-transparent
                     bg-gradient-to-r from-indigo-600 to-purple-600"
              >
                Ahana Shaikh
              </h4>

              <p className="mt-5 text-slate-600 leading-relaxed">
                Ahana Shaikh is the Founder and Director of Aryahs World, a technology-driven company focused on building intelligent AI solutions that empower businesses and communities worldwide.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                With a strong foundation in engineering, Ahana has been pursuing the Bachelor of Technology (B.Tech) in CSE AIML degree from D.Y. Patil University. She brings a forward-thinking approach to innovation, combining technical expertise with strategic leadership to design scalable, real-world AI systems. She has also received the Youngest Entrepreneur Award at the ALFA Awards, presented by the Hon’ble Chief Minister of Maharashtra.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                As a technology leader, Ahana actively drives initiatives in Generative AI, Agentic AI, Large Language Model (LLM)–driven automation, and enterprise-grade AI solutions, with a vision to make advanced technology accessible, impactful, and ethically driven. Her leadership emphasizes innovation, execution excellence, and long-term value creation.
              </p>
            </div>

          </div>
        </motion.div>
      </section>





      {/* TIMELINE */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <h2 className="text-2xl font-semibold text-center">Our Journey</h2>
        <p className="text-sm text-slate-500 text-center mt-2">Milestones that shaped Aryahs World</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEFT Divider timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 to-violet-400/60" />
            <ul className="space-y-8 pl-12">
              {timeline.map((t, i) => (
                <motion.li key={i}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center border border-slate-100">
                      <div className="text-indigo-600 font-semibold">{t.year}</div>
                    </div>
                    <div>
                      <div className="font-medium text-slate-800">{t.title}</div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <ul className="space-y-6 md:space-y-8">
              {timeline.map((t, i) => (
                <motion.li key={i} className="bg-white/90 backdrop-blur rounded-2xl p-4 shadow-md border b
order-slate-100">
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
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-10 bg-gradient-to-r from-white/60 to-white/30">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-lg font-semibold text-center">Tech & Tools</h2>
          <p className="text-sm text-slate-500 text-center mt-2">
            Tools we use to build reliable, scalable systems
          </p>

          <div className="mt-6 overflow-hidden">
            <motion.div
              className="flex gap-6 items-center py-4"
              animate={{ x: ["0%", "-35%"] }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            >
              {Array.from({ length: 2 }).flatMap(() =>
                techs.map((t) => (
                  <div
                    key={t}
                    className="min-w-[120px] px-4 py-3 bg-white/90 backdrop-blur rounded-xl border border-slate-100 shadow-sm text-center text-sm font-medium"
                  >
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
          <h2 className="text-2xl font-semibold">Let's build something meaningful</h2>
          <p className="text-slate-600 mt-2">
            If you're exploring AI, 6G, or product development — let's talk.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button onClick={() => navigate("/contact")} className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
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
