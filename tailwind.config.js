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
        'LightGrayishBlue' : 'hsl(233, 11%, 84%)',
        'VeryDarkBlue' : 'hsl(235, 21%, 11%)',
        'VeryDarkGrayishBlue2' : 'hsl(237, 14%, 26%)',
        'LightGrayishBlue2' : 'hsl(234, 39%, 85%)'
      }
    },
  },
  plugins: [],
}
