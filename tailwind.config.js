/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'hardDark':'#01021E',
        'custom-dark': '#000123',
        'buttomColor':'#FF0F7B',
        
      },
      height:{
        'mdScreen':'87vh',
        'mxScreem':'90vh',
      },
      textColor:{
        'textPrimary':'#FF0F7B',
      },
      boxShadow:{
        'whiteShadow':'1px 2px 8px white',
      },
      fontFamily:{
        'FontPrincipal' : ' "TT Octosquares", sans-serif ',
        'FontSecundario' : '"Cosmic Octo", sans-serif',
      }

    },
  },
  plugins: [],
}

