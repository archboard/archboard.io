const colors = require('tailwindcss/colors')
const uiColors = require('@tailwindcss/ui/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/**/*.ejs',
    './src/**/*.md',
    './src/**/*.njk',
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
        teal: uiColors.teal,
      },
      fontFamily: {
        sans: [
          `'Inter'`,
          ...defaultTheme.fontFamily.sans,
        ]
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/ui'),
  ],
}
