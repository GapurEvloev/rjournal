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
    // Кастомизация стилей по умолчинию для кнопки
    plugin(function ({ addBase, config }) {
      addBase({
        "button, [type='button'], [type='reset'], [type='submit']": {
          backgroundColor: config("theme.backgroundColor.white"),
        },
      });
    }),
  ],
};
