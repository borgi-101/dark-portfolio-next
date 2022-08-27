module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens:{
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
  
        'md': '1000px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px'
      }
    },
  },
  plugins: [],
}