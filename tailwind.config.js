/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Montserrat", " sans-serif"],
        ttleFont: ["Inter", " sans-serif"],
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        textDark: "#161616",
        textLight: "#ffe8fb",
        colorRed: "#ea1538",
        colorLight: "#ff6c3e",
        hoverColor: "rgba(100,255,218,0.1)",
        bgColor: "#ffd5b8",
      },
    },
  },
  plugins: [],
}