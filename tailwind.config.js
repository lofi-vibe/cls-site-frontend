/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'lightBlue':  '#81AFDD',
        'primary-orange': '#FF5722',
        'dimWhite': "rgba(255, 255, 255, 0.7)",
        'dimBlue': "rgba(9, 151, 124, 0.1)",
      }
    },
  },
  plugins: [],
}