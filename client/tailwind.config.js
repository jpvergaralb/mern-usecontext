/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gh-dark": "#0d1117",
        "gh-soft-dark": "#161b22",
        "cool-dark": "#0e0e0e",
        "dev-to-bg": "#0e1217"
      }
    },
  },
  plugins: [],
}