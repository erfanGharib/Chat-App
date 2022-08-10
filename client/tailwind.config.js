/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './public/index.html',
    './src/*.js',
    './*.js',
    './src/components/*.jsx',
    './src/*.svg',
    './src/pages/**/**/*.{jsx,js}',
    './src/pages/**/*.{jsx,js}',
    './src/assets/icons/*.svg',
    './src/layout/*.js',
  ],
  content: [],
  theme: {
    extend: {
      minWidth: {
        14: '3.5rem',
        320: '320px'
      },
      maxWidth: {
        320: '320px'
      },
    },
  },
  plugins: [],
}
