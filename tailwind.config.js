/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      clashDisplay: ["Clash Display", "sans-serif"],
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      "blue-800": "#222741",
      "teal-100": "#D7FFF7",
      "teal-200": "#C7F1E9",
      "teal-300": "#32E0C4",
      teal: "#217F70",
      darkBlue: "#222741",
      peppermint: "#A2FFEA",
      grey: "#464646",
      lightGrey: "#E5E4E2",
      darkGreen: "#264F49",
    },
    extend: {},
  },
  plugins: [],
};
