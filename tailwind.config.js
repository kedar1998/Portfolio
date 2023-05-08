/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bcg: "#0D1117",
        gray: "#8B949E",
        primary: '#074339'
      }
    },
  },
  plugins: [],
}

