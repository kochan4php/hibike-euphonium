module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: 16,
      center: true,
    },
    extend: {
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
