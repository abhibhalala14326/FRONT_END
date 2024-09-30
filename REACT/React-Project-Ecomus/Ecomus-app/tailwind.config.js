// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

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

  darkMode: "class",
  plugins: [nextui()]
 
}