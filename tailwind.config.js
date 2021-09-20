/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [
        'DM Sans',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    extend: {
      colors: {
        primary: '#2f45c5',
        secondary: '#0f1743',
        blackRussian: '#141432',
        midnight: '#1d1e42',
        sealBrown: '#1b1b44',
        bossanova: '#554d56',
        greyser: '#d3dae2',
        solitude: '#eaedf1',
        redOrange: '#ff3b30',
        sliderLeft: '#7c80dc',
        sliderRight: '#7cc6dc',
        ...colors,
      },
      boxShadow: {
        menu: '0 0 14px 0 rgba(15, 23, 67, 0.2)',
      },
      zIndex: {
        '-1': -1,
      },
      backgroundImage: {
        mainLayout: 'linear-gradient(220deg, rgba(124, 128, 220, 0.2) 45%, rgba(124, 198, 220, 0.3))',
      },
      width: {
        22: '5.5rem',
      },
    },
  },
  variants: {
    extend: {
      textOpacity: ['active'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      textColor: ['checked'],
      tableLayout: ['hover', 'focus'],
      flexGrow: ['hover', 'focus'],
    },
  },
  plugins: [],
};
