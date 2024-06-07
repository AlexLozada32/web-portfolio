/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnightSlate: "#2B304D",
        twilightIndigo: "#39436F",
        coralSunset: "#FF7F50",
      },

      gridTemplateColumns: {
        "auto-1fr": "auto 1fr",
      },

      animation: {
        hoverUp: "hoverUp 0.5s ease forwards",
        hoverDown: "hoverDown 0.5s ease",
      },

      keyframes: {
        hoverUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-4px)" },
        },
        hoverDown: {
          "0%": { transform: "translateY(-4px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
