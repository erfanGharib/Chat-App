/** @type {import('tailwindcss').Config} */
module.exports = {
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
  ],
  content: [],
  theme: {
    extend: {
      minWidth: {
        14: '3.5rem',
        12: '3rem',
        320: '320px'
      },
      maxWidth: {
        12: '3rem',
        14: '3.5rem',
        320: '320px'
      },
    },
  },
  plugins: [],
}
