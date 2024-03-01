/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // content: [
  //   './public/index.html',
  //   './src/*.ts',
  //   './*.ts',
  //   './src/components/*.tsx',
  //   './src/*.svg',
  //   './src/components/**/*.{tsx,ts}',
  //   './src/pages/**/*.{tsx,ts}',
  //   './src/assets/icons/*.svg',
  //   './src/layout/*.ts',
  //   './src/layout/**/*.ts',
  // ],
  // purge: [],

  content: [
    './app/src/**/**/*.{svg,html,js,tsx,ts}',
    './app/src/**/*.{svg,html,js,tsx,ts}',
    './app/src/components/**/*.{svg,html,js,jsx,tsx,ts}',
    './app/src/components/**/**/*.{svg,html,js,jsx,tsx,ts}',
    './app/src/assets/**/*.{svg,html,js,jsx,tsx,ts}',
  ],
  theme: {
    extend: {
      width: {
        '4.5': '15px',
        'max-content': 'max-content'
      },
      minWidth: {
        320: '320px',
        640: '640px',
        200: '200%'
      },
      borderRadius: {
        c: '0.75rem'
      },
      maxWidth: {
        320: '320px',
        11: '2.8rem'
      },
      minHeight: {
        16: '4rem'
      },
      transitionDuration: {
        c: '300ms'
      },
      colors: {
        primary: 'rgb(14 165 233)',
        darkMode_toLightC: 'rgb(64 64 64)',
        darkMode_lightC: 'rgb(38 38 38)',
        darkMode_darkC: 'rgb(23 23 23)',

        lightMode_toLightC: '#f8f8f8',
        lightMode_lightC: 'rgb(237 237 237)',
        lightMode_darkC: 'rgb(230 230 230)',
        lightMode_toDarkC: 'rgb(212 212 212)',
      },
      translate: {
        '82': '344px', 
      },
    },
  },
  plugins: [],
}
