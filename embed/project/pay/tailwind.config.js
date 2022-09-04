const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Mono", ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        ...defaultTheme.fontWeight,
        normal: "300",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
