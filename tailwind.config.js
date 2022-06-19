module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: 16,
      center: true,
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
