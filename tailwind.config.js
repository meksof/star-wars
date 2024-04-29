/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'antonio': ["Antonio", 'sans-serif'],
    },
    extend: {
      colors: {
        black: "#080808",
        white: "#F2F9FF",
        muted: "#808080"
      }
    }
  },
  plugins: [],
}

