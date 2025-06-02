/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xl2: "1400px", // Custom breakpoint for 1400px
      },
      animation: {
        'crystal-rotate': 'crystal-rotate 1000ms infinite ease-out',
        'crystal-shine': 'crystal-shine 1000ms infinite ease-in-out',
        'crystal-float': 'crystal-float 2.5s infinite ease-in-out',
      },
      keyframes: {
        'crystal-rotate': {
          '0%': { transform: 'rotateY(-60deg)' },
          '28.5%': { transform: 'rotateY(60deg)' },
          '57%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(-60deg)' },
        },
        'crystal-shine': {
          '0%, 100%': { 
            boxShadow: '0 0 60px 20px white',
            width: '10px',
            height: '10px',
          },
          '50%': { 
            boxShadow: '0 0 100px 40px rgba(255, 255, 255, 0.8), 0 0 5px 0 white',
            width: '15px',
            height: '15px',
          },
        },
        'crystal-float': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(28px)' },
          '30%': { transform: 'translateX(28px)' },
        },
      },
    },
  },
  plugins: [],
};
