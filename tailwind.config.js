/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "sunny-pool": "url('/sunny-pool.webp')"
      },
      colors: {
        "primary" : "#9A8A78"
      }
    },
  },
  plugins: [],
}
