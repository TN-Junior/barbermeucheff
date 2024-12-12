/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000", // Fundo preto
        foreground: "#00FF00", // Verde personalizado
      },
    },
  },
  plugins: [],
};
