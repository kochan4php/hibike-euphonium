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
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
