import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Youtube, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#010b1a] text-white pt-20 pb-10 overflow-hidden">

      {/* Background Effects */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.1),transparent_60%)]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(250,204,21,0.08),transparent_60%)]"
        animate={{ backgroundPosition: ["100% 0%", "0% 100%", "100% 0%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* About Us */}
        <div className="col-span-1">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-sky-400 via-indigo-400 to-amber-300 bg-clip-text text-transparent">
            About Us
          </h3>

          <p className="text-gray-400 leading-relaxed text-sm mb-4">
            Aryahs World Infotech (OPC) Pvt Ltd. is a dynamic hub of innovation,
            hosting a range of forward-thinking startups. Each venture leverages
            emerging technologies to build futuristic solutions that impact real life.
          </p>

          <a href="/about" className="text-sky-400 font-medium hover:text-amber-300 transition">
            Read More...
          </a>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-sky-400 via-indigo-400 to-amber-300 bg-clip-text text-transparent">
            Our Menu
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-amber-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-amber-300">About Us</Link></li>
            <li><Link to="/services" className="hover:text-amber-300">Our Services</Link></li>
            <li><Link to="/contact" className="hover:text-amber-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-sky-400 via-indigo-400 to-amber-300 bg-clip-text text-transparent">
            Contact Us
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="text-sky-400 w-5 h-5 mt-[2px]" />
              <span>
                Gauri Complex, 601, Sector 11, CBD Belapur,<br />
                Navi Mumbai, Maharashtra 400614
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="text-sky-400 w-5 h-5" />
              <a href="tel:+919619901999" className="hover:text-amber-300">
                +91 9619901999
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="text-sky-400 w-5 h-5" />
              <a href="mailto:info@aryahsworld.com" className="hover:text-amber-300">
                info@aryahsworld.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-sky-400 via-indigo-400 to-amber-300 bg-clip-text text-transparent">
            Follow Us
          </h3>

          <div className="flex items-center gap-5 mt-3">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/108139869/admin/page-posts/published/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Linkedin className="text-sky-400 w-6 h-6" />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@Aryahs_World-k6e"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Youtube className="text-red-500 w-6 h-6" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/aryahsworldinfotech?igsh=Y3Fudzkyd3ZsMGNi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Instagram className="text-pink-500 w-6 h-6" />
            </a>
            {/* Twitter / X */}
            <a
              href="https://x.com/Aryahs_World_"   // <-- replace with your real handle
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Twitter className="text-blue-400 w-6 h-6" />
            </a>




          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 mt-14 mb-6 max-w-7xl mx-auto px-6">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 text-center text-gray-400 text-sm">
        © 2025{" "}
        <span className="text-sky-400 font-semibold">
          Aryahs World Infotech (OPC) Pvt. Ltd.
        </span>{" "}
        All rights reserved.
      </div>
    </footer>
  );
}
