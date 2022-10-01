/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  purge: [
    './public/index.html',
    './src/*.js',
    './*.js',
    './src/components/*.jsx',
    './src/*.svg',
    './src/components/**/*.{jsx,js}',
    './src/pages/**/*.{jsx,js}',
    './src/assets/icons/*.svg',
    './src/layout/*.js',
    './src/layout/**/*.js',
  ],
  content: [],
  theme: {
    extend: {
      minWidth: {
        320: '320px',
      },
      maxWidth: {
        320: '320px'
      },
      colors: {
        darkMode_toLightC: 'rgb(64 64 64)',
        darkMode_lightC: 'rgb(38 38 38)',
        darkMode_darkC: 'rgb(23 23 23)',

        lightMode_toLightC: '#f8f8f8',
        lightMode_lightC: 'rgb(237 237 237)',
        lightMode_darkC: 'rgb(230 230 230)',
      },
      backgroundImage: {
        'darkThemePattern': "url('/src/assets/darkModeBg.jpg')",
        'lightThemePattern': "url('/src/assets/lightModeBg.png')",
      }
    },
  },
  plugins: [],
}
