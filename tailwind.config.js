/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.{html,js}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['"Jost"', 'sans-serif'],
        libre: ['"Libre Baskerville"', 'serif'],
        inter: ['"Inter"', 'sans-serif']
      },
    },
  },
  plugins: [],
}