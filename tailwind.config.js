/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    // https://tailwindcss.com/docs/typography-plugin
    require("@tailwindcss/typography"),
  ],
  //
  darkMode: "class",
};
