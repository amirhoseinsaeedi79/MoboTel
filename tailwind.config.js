/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
    },

    extend: {
      colors:{
        blue:"#068fff",
        orginal:'#e6f0fa',
        hover:'#5db5fc',
        body:'#f4f5f9',
        login:'#90caf9'
      }
    },
  },
  plugins: [],
}