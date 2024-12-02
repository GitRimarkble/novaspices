/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#3498db',
        'brand-secondary': '#2ecc71',
        'brand-accent': '#e74c3c'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
