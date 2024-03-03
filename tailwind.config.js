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
    './client/src/**/**/*.{svg,html,js,tsx,ts}',
    './client/src/**/*.{svg,html,js,tsx,ts}',
    './client/src/components/**/*.{svg,html,js,jsx,tsx,ts}',
    './client/src/components/**/**/*.{svg,html,js,jsx,tsx,ts}',
    './client/src/assets/**/*.{svg,html,js,jsx,tsx,ts}',
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
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.f-center': {
          '@apply flex items-center justify-center': {},
        },
        '.f-start-center': {
          '@apply flex items-start justify-center': {},
        },
        '.f-start-start': {
          '@apply flex items-start justify-start': {},
        },
        '.f-center-start': {
          '@apply flex items-center justify-start': {},
        },
        '.f-end-start': {
          '@apply flex items-end justify-start': {},
        },
        '.f-start-end': {
          '@apply flex items-start justify-end': {},
        },
        '.f-center-end': {
          '@apply flex items-center justify-end': {},
        },
        '.f-center-between': {
          '@apply flex items-center justify-between': {},
        },
        '.f-start-between': {
          '@apply flex items-start justify-between': {},
        },
        '.ltr': {
          direction: 'ltr',
        },
        '.link': {
          '@apply cursor-pointer opacity-60 relative hover:opacity-100 transition-opacity py-3 f-center gap-x-2': {},
          color: '#9b9ec0'
        }
      })
    }
  ]
}
