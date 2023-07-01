/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
    colors:{
      'black': '#010905',
      'black2': '#060E0A',
      'white': '#ECEEF2',
      'accent':{
        400: '#49CEF3',
        500: '#15A9DE'
      }
    },
    fontFamily:{
      'inter': ['Inter', 'sans-serif']
    }
    }
  },
  plugins: [],
}

