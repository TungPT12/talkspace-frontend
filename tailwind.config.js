/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-1': 'rgba(17, 25, 40, 0.75)',
      },
      backdropBlur: {
        'custom-1': '16px'
      },
      backdropSaturate: {
        'custom-1': '180%'
      },
      borderColor: {
        'custom-1': 'rgba(255, 255, 255, 0.125)'
      }
    },
  },
  darkMode: ['class'],
  plugins: [],
}

