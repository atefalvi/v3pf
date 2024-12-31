/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{vue,js,ts,jsx,tsx}",
    "./content/**/*.md",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
