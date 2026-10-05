/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "Inter", "sans-serif"],

        sans: ["Inter", "system-ui", "sans-serif"],
      },

      boxShadow: {
        glow: "0 0 50px rgba(96,165,250,.16)",
      },

      backgroundImage: {
        grid: "linear-gradient(rgba(148,163,184,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.06) 1px, transparent 1px)",
      },
    },
  },

  plugins: [],
};
