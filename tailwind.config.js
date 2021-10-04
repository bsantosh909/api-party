const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  mode: 'jit',
  theme: {
    colors,
  },
  plugins: [require('@tailwindcss/typography')],
}
