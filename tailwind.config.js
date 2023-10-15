/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { colors: {
      greyNeo: '#334861',
      blackNeo: '#4E5E62',
    },
    fontFamily: {
      sans: ['Helvetica Neue', 'sans-serif'],
    },
    backgroundImage: {
      'bgImg': "url('/src/images/bgImg.jpg')",
      'bgImg2': "url('/src/images/bgImg2.jpg')",
      'bgImg3': "url('/src/images/bgImg3.jpg')",
    },
    screens: {
      'xs': '400px', // Example: Custom breakpoint named 'xs' at 400px
      'sm': '640px', // Example: Custom breakpoint named 'sm' at 640px
      'md': '768px', // Example: Custom breakpoint named 'md' at 768px
      'lg': '1024px', // Example: Custom breakpoint named 'lg' at 1024px
      'xl': '1280px', // Example: Custom breakpoint named 'xl' at 1280px
    },},
  },
  plugins: [],
}

