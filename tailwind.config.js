/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      colors: {
        "dark-bg-primary": "#111111",
        "dark-bg-secondary": "#191919",
        "dark-main-text": "#d2585d",
        "dark-main-text2": "#9c374d",
        "light-bg-primary": "#23293f",
        "light-bg-secondary": "#f6f6f6",
        "light-main-text": "#f6f6f6",
      }
    },
  },
  plugins: [],
}
