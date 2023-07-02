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
    maxwidth: {
      container: "1440px",
      contentContainer: "1140px",
      conteinerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('~/public/assets/images/LogoAJUPIS.png')",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        nd: "667px",
        ndl: "768px",
        lg: "960px",
        lgl: "1024px",
      }, 
      fontFamily: {
        bodyFont: ["Montserrat", " sans-serif"],
        titleFont: ["Inter", " sans-serif"],
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        textDark: "#161616",
        textLight: "#ffe8fb",
        colorRed: "#ea1538",
        colorLight: "#ff6c3e",
        hoverColor: "#FFD4F0",
        bgColor: "#ffd5b8",
      },
      
    },
  },
  plugins: [],
}