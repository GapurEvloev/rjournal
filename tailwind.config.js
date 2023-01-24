const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Customizing the default styles for the button
    plugin(function ({ addBase, config }) {
      addBase({
        "button, [type='button'], [type='reset'], [type='submit']": {
          backgroundColor: config("theme.backgroundColor.white"),
        },
      });
    }),
  ],
};
