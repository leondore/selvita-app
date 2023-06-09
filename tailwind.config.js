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
          interact: '#476B38',
        },
        secondary: {
          DEFAULT: '#764B29',
          interact: '#52351D',
        },
        tertiary: '#9AB257',
        accent: '#FFAA33',
        dark: '#306931',
        success: {
          DEFAULT: '#79b823',
          interact: '#669A1D',
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
        display: ['var(--font-great-vibes)', 'cursive'],
      },
      fontSize: {
        '6.5xl': '4.125rem',
      },
      spacing: {
        0.75: '0.1875rem',
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
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
      transitionProperty: {
        top: 'top',
        bottom: 'bottom',
      },
      transitionTimingFunction: {
        spin: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
        spinInner: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      },
      keyframes: {
        scaleX: {
          '0%': { transform: 'scaleX(0%)' },
          '100%': { transform: 'scaleX(100%)' },
        },
        enterRight: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        scaleX: 'scaleX 200ms ease-in-out',
        enterRight: 'enterRight 400ms ease-in-out',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
};
