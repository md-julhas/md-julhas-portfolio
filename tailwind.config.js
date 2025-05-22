/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/hero.jpg')",
      },
      colors: {
        darkPrimary: "#060A17",
        darkSecondary: "#121A2F",
        gradientFirst: "#D60948",
        gradientSecond: "#ff014f",
        themeColor: "#ff014f",
      },
    },
    screens: {
      xs: "480px", // Small mobile devices
      sm: "640px", // Standard mobile devices
      md: "768px", // Tablets
      lg: "1024px", // Small laptops
      xl: "1280px", // Desktops
      xxl: "1536px", // Large screens
    },
  },
  plugins: [],
}
