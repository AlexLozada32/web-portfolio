/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      screens: {
        xs: "400px",
      },
      colors: {
        background: "#2b304d",
        mainCard: "#39436F",
        socialColor: "#E5E4E2",
        orangeTone: "#FF7F50",
        buttonColor: "#4C5DA9",
        resumeHover: "#3D4A88",
        startingBarColor: "#87A3D3",
        cardColor: "#576EB9",
        formInputBg: "#E4EAF5",
        formInputText: "#708090",
      },

      gridTemplateColumns: {
        "auto-1fr": "auto 1fr",
      },

      boxShadow: {
        "custom-glow": "5px 5px 15px rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
