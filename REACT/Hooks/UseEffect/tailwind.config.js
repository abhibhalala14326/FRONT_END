/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slide: 'slide 2s ease-in-out',
        prevSlider: 'prevSlider 2s ease-in-out',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(1000px)' },
        },
        prevSlider: {
          '0%': { transform: 'translateX(-1000px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
