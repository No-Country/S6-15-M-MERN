/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        buttons: {
          buttonGreen: "#7CC298",
          saveButtonGreen:"#43936C",
          pressedButtonGreen:"#20573D",
          hoverButtonGreen:"#20573D",
        },
        backgroundColor: "#F5F5F5",
        btnColor: "#7CC298", /* este color está repetido en la línea 8 */
        textWhite: " #FFFFFF",
        backgroundCardColor: "#F5F7FA",
        blueLinks: '#4285F4',
        greyText: '#666666',
        labelColor:"#083A50",
        labelGrayColor:"#CACED8",
        focusColor:"#26B893",
        blueGeneral: '#28315CCC'
      },
      fontFamily: {
        khula:['Khula', 'sans-serif'],
        inter:['Inter', 'sans-serif']
      },
    },
  },
};
