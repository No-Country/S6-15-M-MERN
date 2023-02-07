/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   'backgroundColor':'#F5F5F5',
      
    //   // Configure your color palette here
    // },
    
    colors: {
      'background-color':'#F5F5F5',
      'primary':'#28315C',
      'btn-color':'#7CC298',
      'text-white': ' #FFFFFF;'
      

      // Configure your color palette here
    },
    fontFamily:{
      khula:[ 'Khula', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}