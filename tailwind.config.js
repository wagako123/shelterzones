/** @type {import('tailwindcss').Config} */

const plugin= require('tailwindcss/plugin')

const rotateY= plugin(function({addUtilities}){
  addUtilities({
    '.rotate-y-180':{
      transform: "rotateY(180deg)"
    },
    '.-rotate-y-180':{
      transform: "rotateY(-180deg)"
    }

  })
})
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "color-primary":"#01051e",
        "color-primary-light":"#50b8e7",
        "color-primary-dark":"#010417",
        "color-secondary":"#ff7d3d",
        "color-gray":"#333",
        "color-white":"#fff",
        "color-blob":"#a427df"

      }
    },
    container:{
      center:true,
      padding:{
        default:'20px',
        md:'50px',
      }
    }
  },
  plugins: [rotateY],
}

