import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

function App() {
  return (
    <Router>
      <div className="bg-white text-gray-800 overflow-x-hidden">
        {/* Navbar always visible */}
        <Navbar />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
        </Routes>

        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
