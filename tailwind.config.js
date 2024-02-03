/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  

  theme: {
    screens: {
     xsm:'420px',
     sxm:'320px',
     sm: '480px',
     md: '768px',
     lg: '976px',
     xl: '1440px',
    },
    extend: {
      colors: {
        Primary: '#1A0D43', // Replace with your desired color code
         Secondary :'#EB5552',
         third :'#E4BC67'
      },
    },
  },
  plugins: [require("daisyui")],
}

