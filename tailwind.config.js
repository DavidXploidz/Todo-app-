/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'VeryDarkGrayishBlue' : 'hsl(235, 19%, 35%)',
        'LightGrayishBlue' : 'hsl(233, 11%, 84%)'
      }
    },
  },
  plugins: [],
}
