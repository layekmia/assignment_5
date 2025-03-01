/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./blog.html", "./main.js"],
  theme: {
    extend: {
      colors:{
        primaryClr: '#3752FD',
        primaryTxtClr: '#00303C',
        lightClr: '#F4F7FF',
      },
      fontFamily: {
        displayFont: ["Poppins", "sans-serif"]
      },
      backgroundImage:{
        customGradient: 'linear-gradient(130.70deg, rgb(55, 82, 253) 0.419%,rgb(108, 127, 250) 52.66%,rgb(155, 168, 248) 99.733%);'
      }
    }, 
  },
  plugins: [],
}

