/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        displaySerif: ["Lucette", "serif"],
        serif: ["Happy Times at the IKOB", "sans-serif"],
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
