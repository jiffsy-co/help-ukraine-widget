const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#1F1F1F',
        logoBlue: '#2559B5',
        borderGray: '#E5E5E5',
        'blue-ua': '#2559B5',
        'yellow-ua': '#F7D648',
      },
      minHeight: {
        '660px': '660px',
        '800px': '800px',
      },
      height: {
        '48px': '48px',
        '32px': '32px',
        '96px': '96px',
        '40px': '40px',
        '114px': '114px',
        42: '10.5rem',
      },
      width: {
        '190px': '190px',
        '32px': '32px',
        '48px': '48px',
        4: '4.5rem',
        '128px': '128px',
        '170px': '170px',
        '120px': '120px',
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        '12px': '12px',
        '14px': '14px',
        '20px': '20px',
      },
      spacing: {
        '5px': '5px',
        '10px': '10px',
        '4%': '4%',
        '5%': '5%',
        '10%': '10%',
        '12%': '12%',
        '20%': '20%',
        '30%': '30%',
        '25%': '25%',
        '45%': '45%',
        '50%': '50%',
      },
      rotate: {
        7: '7deg',
        9: '9deg',
        13: '13deg',
        15: '15deg',
        16: '16deg',
        18: '18deg',
      },
    },
  },
  plugins: [],
}
