"use client";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Lenis from "@studio-freight/lenis";

import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import CoreCapabilities from "../sections/CoreCapabilities";
import OurProducts from "../sections/OurProducts";
import DeliveredProjects from "../sections/DeliveredProjects";
import AwardsSection from "../sections/AwardsSection";
import ReviewsSection from "../sections/ReviewsSection";

function Home() {

  // ⭐ ADD LENIS SMOOTH SCROLL
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      smooth: true,
      smoothTouch: false,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#f5f9ff]">
      {/* ================= SEO META TAGS ================= */}
      <Helmet>
        <title>
          Aryahs World Infotech | AI & 6G Innovation | Web, App & Automation Solutions
        </title>
        <meta
          name="description"
          content="Aryahs World Infotech specializes in AI, 6G, web, and automation technologies — delivering next-generation digital products and scalable IT solutions that redefine innovation."
        />
        <meta
          name="keywords"
          content="Aryahs World Infotech, AI solutions, 6G innovation, automation services, web development, software company, digital transformation, machine learning, IoT solutions"
        />
        <meta name="author" content="Aryahs World Infotech" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Aryahs World Infotech | Empowering the Future with AI & 6G Innovation"
        />
        <meta
          property="og:description"
          content="Explore our AI, automation, and web development solutions built for next-generation technology ecosystems."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://aryahsinfotech.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aryahs World Infotech | AI & Automation Experts" />
        <meta
          name="twitter:description"
          content="We build future-ready AI and automation solutions for smart businesses."
        />
        <meta name="twitter:image" content="/images/og-image.jpg" />
        <link rel="canonical" href="https://aryahsinfotech.com/" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Aryahs World Infotech",
            url: "https://aryahsinfotech.com/",
            logo: "https://aryahsinfotech.com/logo.png",
            description:
              "Aryahs World Infotech specializes in AI, 6G, and automation technologies — providing smart digital solutions for global businesses.",
            sameAs: [
              "https://www.linkedin.com/company/aryahs-world-infotech/",
              "https://twitter.com/aryahsinfotech",
              "https://www.instagram.com/aryahsinfotech/",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-XXXXXXXXXX",
              contactType: "Customer Support",
              areaServed: "Worldwide",
              availableLanguage: "English",
            },
          })}
        </script>
      </Helmet>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <HeroSection />

      {/* SMOOTH TRANSITION BLOB */}
      <div className="relative h-64 md:h-72 -mt-24 md:-mt-40 z-[5]">
        <div
          className="absolute inset-0 bg-gradient-to-b 
          from-transparent via-[#eaf2ff]/90 to-[#f5f9ff] blur-[40px]"
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-b 
          from-[#ffffff00] via-[#fff7d6]/30 to-[#eaf2ff]/60 animate-[lightFlow_10s_ease-in-out_infinite]"
        ></div>
        <style>{`
          @keyframes lightFlow {
            0% { opacity: 0.4; transform: translateY(-10px); }
            50% { opacity: 1; transform: translateY(10px); }
            100% { opacity: 0.4; transform: translateY(-10px); }
          }
        `}</style>
      </div>

      {/* OUR PRODUCTS */}
      <div className="relative z-10">
        <OurProducts />
      </div>

      {/* SERVICES */}
      <div className="relative z-10">
        <ServicesSection />
      </div>

      {/* CAPABILITIES */}
      <div className="relative z-10">
        <CoreCapabilities />
      </div>

      {/* DELIVERED PROJECTS */}
      <div className="relative z-10">
        <DeliveredProjects />
      </div>

      {/* AWARDS SECTION */}
      <div className="relative z-10">
        <AwardsSection />
      </div>

      {/* REVIEWS SECTION */}
      <div className="relative z-10">
        <ReviewsSection />
      </div>
    </div>
  );
}

export default Home;
