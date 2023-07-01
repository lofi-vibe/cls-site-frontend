/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'color-footer':'#031B34',
        'color-text':'#81AFDD',
        'lightBlue':  '#81AFDD',
        'primary-orange': '#FF5722',
        'dimWhite': "rgba(255, 255, 255, 0.7)",
        'dimBlue': "rgba(9, 151, 124, 0.1)",
      },
      '@layer base': {
        '.font-manrope': {
          fontFamily: 'Manrope, sans-serif',
        },
      }
    },
  },
  plugins: [],
}