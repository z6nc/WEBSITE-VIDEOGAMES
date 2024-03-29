import animations from '@midudev/tailwind-animations'
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
        'blackShadow':'1px 2px 9px black',
        'whiteShadow':'1px 2px 10px white',

      },
      fontFamily:{
        'FontPrincipal' : ' "TT Octosquares", sans-serif ',
        'FontSecundario' : '"Cosmic Octo", sans-serif',
      },
      spacing: {
        '1/7': '27%',
        '3/9': '63%',
        '3/1':'42%',
        
      },
      
      
    
    },
  },
  plugins: [animations],
}

