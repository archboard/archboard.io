module.exports = {
  purge: [
    './src/**/*.ejs',
    './src/**/*.md',
    './src/**/*.njk',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/ui'),
  ],
}
