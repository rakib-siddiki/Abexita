/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          xl: "1310px",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/BackgroundLine.png')",
      },
      screens: {
        xs: "380px",
      },
      colors: {
        primary: {
          100: "#d1dcde",
          200: "#a3babd",
          300: "#75979c",
          400: "#47757b",
          500: "#19525a",
          600: "#144248",
          700: "#0f3136",
          800: "#0a2124",
          900: "#051012",
        },
        gray: {
          50: "#FAFAFA",
          100: "#dedede",
          200: "#bdbdbd",
          300: "#9b9b9b",
          400: "#7a7a7a",
          500: "#595959",
          600: "#667085",
          700: "#353535",
          800: "#242424",
          900: "#121212",
        },
        blue: {
          100: "#cce7f4",
          200: "#99d0e9",
          300: "#66b8df",
          400: "#33a1d4",
          500: "#0089c9",
          600: "#006ea1",
          700: "#005279",
          800: "#003750",
          900: "#001b28",
        },
        orange: {
          100: "#fee3d0",
          200: "#fcc7a2",
          300: "#fbab73",
          400: "#f98f45",
          500: "#f87316",
          600: "#E06F1FFF",
          700: "#95450d",
          800: "#632e09",
          900: "#321704",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
