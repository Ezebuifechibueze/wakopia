/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT:"#EBB305",
          light:"#3C82F6",
        },
    secondary:{

      DEFAULT: "#EBB305",
    }
     
      },
      backgroundImage: {
        overlay:"url('/src/images/showcase.jpg')"
      }
    },
  },
  plugins: [],
};