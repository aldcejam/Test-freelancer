module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      '1/2': '700px%',
    },
    colors: {
      'lightBlue': '#ECF2FE',
      'blue': '#9BBAF9',
      'DarkBlue': '#6394F6',
      'green': '#004740d2',
      'orange': '#F1B22B',
      'title': '#444444',
      'text': '#747575',
      'white': '#ffffff',
      'grayBlue': '#E8F2F1',
      'grayBorder': '#D4D4D4',
      'gray': '#EEEEEE',
      'black': '#060D3B'
    },
    fontFamily: {
      'pacifico': ['Pacifico', 'cursive', 'sans'],
      'workSans': ['Work Sans', 'Pacifico', 'sans'],
    },
    screens: {
      'minssm': '400px',

      'minmsm': '500px',

      'minsm': '640px',

      'minmd': '768px',

      'minlg': '1023px',

      'minxl': '1280px',

      'ssm': '400px',

      'msm': {
        'max': '500px'
      },

      'sm': {
        'max': '640px'
      },

      'md': {
        'max': '768px'
      },

      'lg': {
        'max': '1023px'
      },

      'xl': {
        'max': '1280px'
      },

      '2xl': '1536px',
    },
    extend: {
      boxShadow: {
        '2xl': 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        '3xl': 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
      }
    },
  },
  plugins: [],
}