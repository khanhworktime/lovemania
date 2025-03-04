const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        chalet: ["var(--font-chalet)"],
      },
      colors: {
        primary: {
          DEFAULT: "#4B164C",
          50: "#F8EDF8",
          100: "#F0DCF0",
          200: "#E2B9E2",
          300: "#D396D4",
          400: "#C573C6",
          500: "#B650B8",
          600: "#9A3C9C",
          700: "#7E2980",
          800: "#621564",
          900: "#4B164C",
          950: "#340F35",
        },
        secondary: {
          DEFAULT: "#DD88CF",
          50: "#FCF5FA",
          100: "#F9EBF6",
          200: "#F2D7ED",
          300: "#EBC3E3",
          400: "#E4AFDA",
          500: "#DD88CF",
          600: "#D16BC0",
          700: "#C54EB1",
          800: "#B13A9E",
          900: "#93318A",
          950: "#762A6F",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          primary: "#4B164C",
          secondary: "#DD88CF",
        },
        dark: {
          primary: "#4B164C",
          secondary: "#DD88CF",
        },
      },
    }),
    require("@tailwindcss/container-queries"),
  ],
};
