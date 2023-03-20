/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'background' : "url('/img/background.jpg')"
      },
    },
      fontFamily:{
        'unbounded' : ['Unbounded', 'sans-serif']
      }
  },
  plugins: [],
}