/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary" : "#06a055",
        "heroBg": "#0e1122",
        "para" : "rgba(0 0 0 / 80%)"
      },
      fontFamily: {
        "primary" : ["poppins", "sans-serif"],
        "secondary" : ["Syne", "sans-serif"],
      }
    },
  },
  plugins: [],
}