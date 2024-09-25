/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        verdeoscuro: "#2E8B57",
        verdeclaro:"#66CC66",
        verdementa: "#98FF98",
        rojobrillante:"#FF6347",
        rojoburdeos:"#8B0000",
        amarillodorado:"#FFD700",
        amarillopastel:"#FFFACD",
        marronchocolate: "#8B4513",
        marrontierra: "#D2B48C",
        beige: "#F5F5DC",
        blancopuro: "#FFFFFF",
        blancoroto: "#F8F8FF",
        azulclaro: "#87CEFA",
        azulmarino: "#000080"
      }
    },
  },
  plugins: [],
}

