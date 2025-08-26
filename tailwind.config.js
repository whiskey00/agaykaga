/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cocoa': '#3E3333',
        'merlot': '#5E3F44',
        'mauve': '#A47E82',
        'peony': '#E6CECE',
        'petal': '#F7EAEB',
        'almond': '#F0E7E2',
      },
      fontFamily: {
        'cursive': ['Dancing Script', 'cursive'],
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

