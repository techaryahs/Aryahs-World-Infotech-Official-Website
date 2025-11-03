import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-primary to-accent text-white text-center relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        Empowering Innovation with <span className="text-lightBlue">Technology</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-lg md:text-xl mb-8 max-w-2xl"
      >
        Building intelligent solutions for the AI-driven future.
      </motion.p>

      <div className="flex gap-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 bg-white text-primary rounded-full font-semibold shadow-lg hover:bg-lightBlue transition"
        >
          Get Started
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition"
        >
          Learn More
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;
