module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00CF98',
        'secondary': '#E85C31',
        'dark': "#141414",
        'light': "#ffffff",
        'muted': '#959595'
      },
    },
  },
  plugins: [],
}