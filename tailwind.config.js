/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const Nth = require('tailwind-nth-child');
const nth2n = new Nth('2n',"2n+0");
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  variants:{

  },
  theme: {
    extend: {
      
      colors: {
        "primary": "#59DBB5",
        "secondary": "#A015E3",
        "bg_secondary":"#fbfbfb",
        "odd_tr_color_white":"#FAFAFA",
        "odd_tr_color_dark":"#292D47",
        "purchart_tr_color_dark":"#343857",
        "bg-header": {
          dark: "#283150"
        },
        "bg-sidebar": {
          dark: "#2E395F"
        },
        "bg-body": {
          dark: "#200A4C"
        },
        "btn_pink":"#a015e3",
        "btn_red":"#ec3868"
      },
    },
    screens: {
      "xs":"300px",
      "sm": "480px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1420px"
    },
    // colors: {
    //   ...defaultTheme.colors,
    //   "primary": "#59DBB5",
    //   "secondary": "#A015E3",
    //   "bg-header": {
    //     dark: "#283150"
    //   },
    //   "bg-sidebar": {
    //     dark: "#2E395F"
    //   },
    //   "bg-body": {
    //     dark: "#200A4C"
    //   }
    // },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
  },
  plugins: [
    nth2n.nthChild()
  ],
}