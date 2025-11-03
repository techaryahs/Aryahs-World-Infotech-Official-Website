import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import CoreCapabilities from "../sections/CoreCapabilities";
import OurProducts from "../sections/OurProducts";
// import WhyChooseUs from "../sections/WhyChooseUs";
import DeliveredProjects from "../sections/DeliveredProjects";  
import AwardsSection from "../sections/AwardsSection";
import ReviewsSection from "../sections/ReviewsSection";

function Home() {
  return (
    <div className="relative overflow-hidden bg-[#f5f9ff]">
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <HeroSection />

      {/* ===== SEAMLESS TRANSITION BETWEEN SECTIONS ===== */}
      <div className="relative h-64 md:h-72 -mt-24 md:-mt-40 z-[5]">
        {/* Layer 1: Gradient Bridge */}
        <div
          className="absolute inset-0 bg-gradient-to-b 
          from-transparent via-[#eaf2ff]/90 to-[#f5f9ff] blur-[40px]"
        ></div>

        {/* Layer 2: Subtle Animated Light Flow */}
        <div
          className="absolute inset-0 bg-gradient-to-b 
          from-[#ffffff00] via-[#fff7d6]/30 to-[#eaf2ff]/60 animate-[lightFlow_10s_ease-in-out_infinite]"
        ></div>

        {/* Custom Animation */}
        <style>{`
          @keyframes lightFlow {
            0% { opacity: 0.4; transform: translateY(-10px); }
            50% { opacity: 1; transform: translateY(10px); }
            100% { opacity: 0.4; transform: translateY(-10px); }
          }
        `}</style>
      </div>
      {/* ===== OUR PRODUCTS SECTION ===== */}
      <div className="relative z-10">
        <OurProducts />
      </div>

      {/* ===== SERVICES SECTION ===== */}
      <div className="relative z-10">
        <ServicesSection />
      </div>

      {/* ===== CORE CAPABILITIES SECTION ===== */}
      <div className="relative z-10">
        <CoreCapabilities />
      </div>
      {/* ===== WHY CHOOSE US SECTION ===== */}
      {/* <div className="relative z-10">
        <WhyChooseUs />
      </div> */}
      {/* ===== DELIVERED PROJECTS SECTION ===== */}
      <div className="relative z-10">
        <DeliveredProjects />
      </div>
      {/* ===== AWARDS SECTION ===== */}
      <div className="relative z-10">
        <AwardsSection />
      </div>
      {/* ===== REVIEWS SECTION ===== */}
      <div className="relative z-10">
        <ReviewsSection />
      </div>
    </div>
  );
}

export default Home;
