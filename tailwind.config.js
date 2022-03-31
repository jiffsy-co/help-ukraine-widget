const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black:'#1F1F1F',
        logoBlue: '#2559B5',
        borderGray: '#E5E5E5'
      },
      height:{
        '48px': '48px',
        '32px': '32px',
        '96px': '96px',
        '114px': '114px'
      },
      width:{
        '190px': '190px',
        '32px':  '32px',
        '48px': '48px',
        '120px': '120px'
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        '12px': '12px',
        '14px': '14px',
        '20px': '20px'
      },
      spacing: {
        '10px': '10px',
        '5px': '5px'
      }
    },
  },
  plugins: [],
};
