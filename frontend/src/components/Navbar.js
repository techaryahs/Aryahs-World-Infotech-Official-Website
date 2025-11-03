import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import NavHii from "../assets/navHi.gif";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    // { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
      {/* Floating Navbar Container */}
      <div className="max-w-6xl w-[80%] md:w-[75%] bg-[#001233]/90 backdrop-blur-lg text-white shadow-lg rounded-full px-8 py-4 flex justify-between items-center border border-white/10">
        
        {/* ---------- LOGO ---------- */}
        <NavLink
          to="/"
          className="text-2xl md:text-3xl font-extrabold tracking-tight"
        >
          Aryahs<span className="text-blue-400">World</span>
        </NavLink>

        {/* ---------- DESKTOP MENU ---------- */}
        <ul className="hidden md:flex items-center space-x-6 font-medium tracking-wide">
          {navLinks.map((link, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative cursor-pointer"
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-1 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                      : "hover:text-blue-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        {/* ---------- RIGHT SIDE GIF ---------- */}
        <div className="hidden md:flex items-center">
          <img
            src={NavHii}
            alt="Hi Animation"
            className="w-12 h-12 object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* ---------- MOBILE MENU ICON ---------- */}
        <div
          className="md:hidden flex flex-col space-y-1 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-[2px] w-6 bg-white transition ${
              open && "rotate-45 translate-y-2"
            }`}
          ></span>
          <span
            className={`h-[2px] w-6 bg-white transition ${
              open && "opacity-0"
            }`}
          ></span>
          <span
            className={`h-[2px] w-6 bg-white transition ${
              open && "-rotate-45 -translate-y-2"
            }`}
          ></span>
        </div>

        {/* ---------- MOBILE MENU ---------- */}
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-20 left-0 w-full bg-[#001233]/95 text-white flex flex-col items-center py-8 space-y-6 font-semibold md:hidden rounded-3xl backdrop-blur-xl"
          >
            {navLinks.map((link, i) => (
              <li key={i} onClick={() => setOpen(false)}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-lg px-4 py-1 rounded-full ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        : "hover:text-blue-400"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            {/* GIF in mobile menu too (optional) */}
            <img
              src={NavHii}
              alt="Hi Animation"
              className="w-16 h-16 object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
            />
          </motion.ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
