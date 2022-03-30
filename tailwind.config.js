const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
      '2xl': '1440px',
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        black:'#1F1F1F',
        logoBlue: '#2559B5',
        borderGray: '#E5E5E5',
        yellow: '#F7D648',
        darkslategray: '#414141',
      },
      height:{
        '48px': '48px',
        '32px': '32px',
        '96px': '96px',
        '44px': '44px',
        '216px': '216px',
        '426px': '426px',
        '170px': '170px',
        '200px': '200px',
        '250px': '250px',
        '300px': '300px',
        '400px': '400px',
        '256px': '256px',
        '220px': '220px',
        '192px': '192px'
      },
      width:{
        '190px': '190px',
        '32px':  '32px',
        '48px': '48px',
        '430px': '430px',
        '470px': '470px',
        '146px': '146px',
        '102px': '102px',
        '170px': '170px',
        '200px': '200px',
        '250px': '250px',
        '300px': '300px',
        '400px': '400px',
        '426px': '426px',
        '256px': '256px',
        '220px': '220px',
        '343px': '343px',
        '125px': '125px'
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        '14px': '14px',
        '16px': '16px',
        '20px': '20px',
        '24px': '24px',
        '32px': '32px',
        '18px': '18px',
        '60px': '60px',
        '40px': '40px',
      },
      lineHeight: {
        '66px': '66px'
      },
      spacing: {
        '10px': '10px',
        '20px': '20px',
        '30px': '30px',
      }
    },
  },
  plugins: [],
};
