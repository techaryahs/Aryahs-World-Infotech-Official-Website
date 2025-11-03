import React from "react";

function AboutPreview() {
  return (
    <section className="py-20 bg-lightBlue flex flex-col md:flex-row items-center justify-between px-8 md:px-20">
      <div className="max-w-lg mb-10 md:mb-0">
        <h2 className="text-4xl font-bold text-primary mb-4">About Aryahs World</h2>
        <p className="text-textGray mb-6">
          We combine creativity and technology to build innovative AI, IoT, and web-based solutions
          that redefine what’s possible.
        </p>
        <button className="px-6 py-3 bg-accent text-white font-semibold rounded-full shadow-md hover:bg-primary transition">
          Learn More
        </button>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2017/01/06/19/15/office-1957478_1280.jpg"
        alt="About us"
        className="w-full md:w-1/2 rounded-2xl shadow-lg"
      />
    </section>
  );
}

export default AboutPreview;
