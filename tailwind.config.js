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
        primary: {
          DEFAULT: '#6BA054',
          dark: '#567F43',
          interact: '#36502A',
        },
        secondary: {
          DEFAULT: '#764B29',
          interact: '#3C2615',
        },
        tertiary: '#9AB257',
        accent: '#FFAA33',
        dark: '#455E44',
        success: {
          DEFAULT: '#4DA858',
          dark: '#3D8545',
          interact: '#27542C',
        },
        warning: {
          DEFAULT: '#FFBA2D',
          interact: '#E09600',
        },
        danger: {
          DEFAULT: '#CC2936',
          interact: '#881B24',
        },
        overlay: {
          link: 'rgba(0, 0, 0, 0.25)',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-montserrat)', 'sans-serif'],
      },
      spacing: {
        0.75: '0.1875rem',
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        7: '7px',
        8: '8px',
      },
      keyframes: {
        scaleX: {
          '0%': { transform: 'scaleX(0%)' },
          '100%': { transform: 'scaleX(100%)' },
        },
      },
      animation: {
        scaleX: 'scaleX 200ms ease-in-out',
      },
    },
  },
  plugins: [],
};
