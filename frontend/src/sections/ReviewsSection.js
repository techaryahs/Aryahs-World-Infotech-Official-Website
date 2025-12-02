"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([]);

  // Fetch real reviews from backend
useEffect(() => {
  const fetchReviews = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/contact/reviews");
      const data = await response.json();

      // ⭐ FIXED — Correct key is data.data
      if (data.success && Array.isArray(data.data)) {
        const validReviews = data.data.map((r) => ({
          message: r.message || r.review || "",
          fullName: r.fullName || r.name || "Anonymous",
          email: r.email || "Valued Client",
          rating: Number(r.rating) || 0,
        }));

        setReviews(validReviews);
      }
    } catch (error) {
      console.error("❌ Error fetching reviews:", error);
    }
  };

  fetchReviews();
}, []);


  return (
    <section className="relative py-24 bg-[#020617] text-white overflow-hidden">
      {/* === Background Glow === */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(56,189,248,0.1),transparent_70%)]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(250,204,21,0.08),transparent_70%)]"
        animate={{ backgroundPosition: ["100% 0%", "0% 100%", "100% 0%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />

      {/* === Section Header === */}
      <div className="text-center mb-14 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-400 via-indigo-400 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.3)]"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-400 mt-3 text-base max-w-2xl mx-auto"
        >
          Real feedback from our clients and collaborators.
        </motion.p>
      </div>

      {/* === Reviews Slider === */}
      <div className="relative z-10 w-full overflow-hidden">
        {reviews.length === 0 ? (
          <p className="text-center text-gray-400">No reviews yet. Be the first to leave one!</p>
        ) : (
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 50,
              ease: "linear",
            }}
          >
            {[...reviews, ...reviews].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 70,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 25px rgba(56,189,248,0.5)",
                }}
                className="min-w-[300px] sm:min-w-[340px] md:min-w-[380px]
                           bg-white/10 backdrop-blur-2xl border border-white/10
                           hover:border-sky-400/40 rounded-3xl p-6 md:p-8
                           shadow-[0_0_25px_rgba(56,189,248,0.05)]
                           hover:shadow-[0_0_35px_rgba(56,189,248,0.2)]
                           transition-all duration-700"
              >
                {/* 🌀 Animated Quote Icon */}
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                >
                  <Quote className="text-sky-400 w-7 h-7 mb-3" />
                </motion.div>

                {/* ✨ Review Message */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="text-gray-300 text-sm leading-relaxed mb-6 italic"
                >
                  “{review.message}”
                </motion.p>

                {/* 👤 Reviewer Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <div className="font-bold text-white text-lg">{review.fullName}</div>
                  <div className="text-sky-400 text-sm mb-1">
                    {review.email || "Valued Client"}
                  </div>

                  {/* ⭐ Animated Stars */}
                  <div className="flex mt-1 space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.span
                        key={star}
                        className={`text-amber-300 text-lg drop-shadow-sm ${
                          star <= (review.rating || 0)
                            ? "opacity-100"
                            : "opacity-25"
                        }`}
                        animate={
                          star <= (review.rating || 0)
                            ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }
                            : {}
                        }
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: star * 0.2,
                          ease: "easeInOut",
                        }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
