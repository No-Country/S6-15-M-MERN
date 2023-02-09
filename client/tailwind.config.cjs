/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          buttons:{
            buttonGreen:'#7CC298',
          },
            backgroundColor: '#F5F5F5',
            blox:'#28315C',
            btnColor:'#7CC298',
            textWhite: ' #FFFFFF',
            backgroundCardColor: '#F5F7FA',
        }
      },
    },
    fontFamily: {
      khula: ['Khula', 'sans-serif']

    },
    // extend: {}, para eliminar, se repite en la línea 5:
  plugins: [],
};
