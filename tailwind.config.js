const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

const brandColors = {
  pink: {
    50: "#FFF5F7",
    100: "#FFE5EA",
    200: "#FFCCD5",
    300: "#FFADBB",
    400: "#FF8095",
    500: "#FF3355",
    600: "#F00028",
    700: "#DB0025",
    800: "#B8001F",
    900: "#850016",
    950: "#57000E",
  },
  blue: {
    50: "#F2F8FD",
    100: "#E0EEFA",
    200: "#BCDAF5",
    300: "#94C3F0",
    400: "#5FA5E8",
    500: "#1E7ACF",
    600: "#1B6EBB",
    700: "#175EA0",
    800: "#134C81",
    900: "#0E3962",
    950: "#0A2743",
  },
  gold: {
    50: "#FFFBF0",
    100: "#FFF5DB",
    200: "#FFE9B3",
    300: "#FFDC85",
    400: "#FFCC4D",
    500: "#FFBB11",
    600: "#EBA800",
    700: "#CC9200",
    800: "#AD7C00",
    900: "#7A5800",
    950: "#5C4200",
  },
  teal: {
    50: "#EBFAF8",
    100: "#DBF5F3",
    200: "#B2EBE5",
    300: "#7ADCD2",
    400: "#39CBBC",
    500: "#2EAFA2",
    600: "#299E92",
    700: "#24897F",
    800: "#1F756C",
    900: "#16554F",
    950: "#0E3531",
  },
  purple: {
    50: "#F5F1FE",
    100: "#EEE8FD",
    200: "#DACCFA",
    300: "#C2ACF6",
    400: "#A482F2",
    500: "#7642EB",
    600: "#672FE9",
    700: "#5518E2",
    800: "#4A15C6",
    900: "#350F8F",
    950: "#1D084E",
  },
  orange: {
    50: "#FFF6F0",
    100: "#FFEBDC",
    200: "#FED4B3",
    300: "#FEBA86",
    400: "#FE9749",
    500: "#F56A02",
    600: "#DF6102",
    700: "#C05402",
    800: "#A24701",
    900: "#743301",
    950: "#512301",
  },
  black: '#060606',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.astro',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        ...brandColors,
        primary: {
          ...brandColors.blue,
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
