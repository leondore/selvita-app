/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6BA054',
        secondary: '#9AB257',
        tertiary: '#764B29',
        accent: '#FFAA33',
        dark: '#455E44',
        success: '#4DA858',
        warning: '#FFBA2D',
        danger: '#CC2936',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
