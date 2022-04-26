module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'lightBlue': '#ECF2FE',
      'blue': '#9BBAF9',
      'DarkBlue': '#6394F6',
      'green': '#00453ef7',
      'orange': '#F1B22B',
      'title': '#343A40',
      'text': '#747575',
      'white': '#ffffff',
      'grayBlue': '#E8F2F1',
      'grayBorder': '#D4D4D4',
      'gray': '#EEEEEE'
    },

    screens: {
      'sm': {
        'max': '640px'
      },

      'md': '768px',

      'lg': {
        'max': '1023px'
      },

      'xl': {
        'max': '1280px'
      },

      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive;', 'sans'],
      },
    },
  },
  plugins: [],
}