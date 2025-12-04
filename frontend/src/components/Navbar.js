import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import NavHii from "../assets/navHi.gif";
import Logo from "../assets/logo.jpg"; // ✅ Correct logo import

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-full flex justify-center px-4 z-[999]">
      <div className="max-w-6xl w-[90%] sm:w-[80%] md:w-[75%] bg-[#001233]/90 backdrop-blur-lg text-white shadow-lg rounded-full px-8 py-4 flex justify-between items-center border border-white/10">

        {/* ---------- LOGO + TEXT ---------- */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-lg border border-blue-400/40 overflow-hidden">
            <img
              src={Logo}
              alt="Aryahs Logo"
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />

          </div>


          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
            Aryahs<span className="text-blue-400">World</span>
          </span>

        </NavLink>

        {/* ---------- DESKTOP MENU ---------- */}
        <ul className="hidden md:flex items-center space-x-6 font-medium tracking-wide">
          {navLinks.map((link, i) => (
            <motion.li key={i} whileHover={{ scale: 1.05 }}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-1 rounded-full transition-all duration-300 ${isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-500 shadow-lg text-white"
                    : "hover:text-blue-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        {/* ---------- GIF (Desktop) ---------- */}
        <div className="hidden md:flex items-center">
          <img
            src={NavHii}
            alt="Hi Animation"
            className="w-12 h-12 object-contain hover:scale-110 transition"
          />
        </div>

        {/* ---------- HAMBURGER ICON ---------- */}
        <div
          className="md:hidden flex flex-col space-y-1 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-[2px] w-6 bg-white transition ${open && "rotate-45 translate-y-2"
              }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition ${open && "opacity-0"
              }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition ${open && "-rotate-45 -translate-y-2"
              }`}
          />
        </div>

        {/* ---------- MOBILE MENU ---------- */}
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              absolute 
              top-[90px] 
              left-0 
              w-full 
              bg-[#001233]/95 
              text-white 
              flex flex-col 
              items-center 
              py-8 
              space-y-6 
              font-semibold 
              md:hidden 
              rounded-3xl 
              backdrop-blur-xl
              z-[9999]     /* ⬅ FIXED: always visible on top */
            "
          >

            {/* Mobile Logo */}


            {navLinks.map((link, i) => (
              <li key={i} onClick={() => setOpen(false)}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-lg px-4 py-1 rounded-full ${isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-500 shadow-lg text-white"
                      : "hover:text-blue-400"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
