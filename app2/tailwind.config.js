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
        teal: {
          100: "#F5FFFD",
          200: "#e1faf5",
          300: "#d3f7f1",
          400: "#c4f5ec",
          500: "#b5f2e7",
          600: "#91c2b9",
          700: "#6d918b",
          800: "#48615c",
          900: "#24302e",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
