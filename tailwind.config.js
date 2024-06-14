/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        twilightIndigo: "#39436F",
        coralSunset: "#FF7F50",
        regalBlue: "#4C5DA9",
        twilightBlue: "#3D4A88",
        whisperingAzure: "#87a3d3",
        sapphireSky: "#576eb9",
        etherealMist: "#E4EAF5",
        slateGray: "#708090",
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
