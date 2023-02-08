/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   
    theme: {
      extend: {
        colors: {
            'background-color':'#F5F5F5',
            'blox':'#28315C',
            'btn-color':'#7CC298',
            'text-white': ' #FFFFFF',
            'background-card-color': '#F5F7FA',
        }
      },
    },
    fontFamily: {
      khula: ['Khula', 'sans-serif']
    },
    extend: {},
    plugins: [require('tailwind-scrollbar-hide')],
};
