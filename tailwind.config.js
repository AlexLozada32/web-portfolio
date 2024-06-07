/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnightSlate: "#2B304D",
        twilightIndigo: "#39436F",
        coralSunset: "#FF7F50",
        regalBlue: "#4C5DA9",
        twilightBlue: "#3D4A88",
      },

      gridTemplateColumns: {
        "auto-1fr": "auto 1fr",
      },
    },
  },
  plugins: [],
};
