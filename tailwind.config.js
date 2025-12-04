/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'premier-red': '#ED1D25',
        'premier-red-dark': '#C91A21',
      },
      fontFamily: {
        sans: ['Urbanist', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        gilroy: ['Gilroy', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

