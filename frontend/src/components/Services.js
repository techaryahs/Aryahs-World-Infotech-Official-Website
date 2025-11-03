import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "AI & ML Solutions",
    desc: "Creating intelligent systems that learn and adapt for your business.",
  },
  {
    title: "Web Development",
    desc: "Building fast, secure, and modern websites using React and Node.js.",
  },
  {
    title: "IoT & 6G Research",
    desc: "Innovating in next-gen connectivity and smart network ecosystems.",
  },
];

function Services() {
  return (
    <section className="py-20 bg-white text-center" id="services">
      <h2 className="text-4xl font-bold text-primary mb-10">Our Services</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {services.map((srv, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-lightBlue p-8 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-accent mb-4">{srv.title}</h3>
            <p className="text-textGray">{srv.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
