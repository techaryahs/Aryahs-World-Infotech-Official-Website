/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A3D91",   // Deep Blue
        accent: "#0F6BE6",    // Bright Blue
        lightBlue: "#E6F0FF", // Soft background blue
        textGray: "#6B7280",  // Neutral text
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
