/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        'poppins':["Poppins", "sans-serif"],
        'tilt-prism':["Tilt Prism", "sans-serif"],
      },
      fontSize:{
          "300":'0.95rem',
          "400":'1rem',
          "500":"1.125rem",
          "550":"1.3rem",
          "600":"1.875rem",
          "700":"2.5rem",
          "800":"3.5rem"
      },
      colors:{
        neutral:{
          100:"#FFF",
          200:"#F7f8FA", 
          400:"#E0E1E5",          
          500:"#3d4043",
          600:"#2d3037",
          700:"#1c1c1c",         
          800:"#181818",
          900:"#000"
        },
        accent:{          
          500:"#00E0FD"
        },
      }
    },
  },
  plugins: [],
}

