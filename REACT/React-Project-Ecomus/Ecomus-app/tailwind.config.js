/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {

   

    
    extend: {},
  },
// theme:{
//   screens: {
//     'mobail': '320px',
//     // => @media (min-width: 320px) { ... }
//   },fontFamily:
//   {
//       "sidebar": "Albert Sans",

//   },
// },

  plugins: [
    require('flowbite/plugin'),
    // require('tailwindcss/defaultTheme')
  ],
 
}