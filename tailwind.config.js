const colors = require('tailwindcss/colors')
const uiColors = require('@tailwindcss/ui/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
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
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        tidal: {
          '50': '#edfafa',
          '100': '#d5f5f6',
          '200': '#afecef',
          '300': '#7edce2',
          '400': '#16bdca',
          '500': '#0694a2',
          '600': '#047481',
          '700': '#036672',
          '800': '#05505c',
          '900': '#014451',
        },
      },
      fontFamily: {
        sans: [
          `'Inter'`,
          ...defaultTheme.fontFamily.sans,
        ]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.500'),
            a: {
              color: theme('colors.primary.500'),
              'transition-property': 'color',
              'transition-duration': '150ms',
              '&:hover': {
                color: theme('colors.primary.400'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/ui'),
    require('@tailwindcss/typography'),
  ],
}
