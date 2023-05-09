/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SemiCondensed: ["Barlow Semi Condensed", "sans-serif"],
      },
      colors: {
        bgColorOne: "#1F3756",
        bgColorTwo: "#141539",
        scissorsOne: "#EC9E0E",
        scissorsTwo: "#ECA922",
        paperOne: "#4865F4",
        paperTwo: "#5671F5",
        rockOne: "#DC2E4E",
        rockTwo: "#DD405D",
        darkText: "#3B4363",
        scoreText: "#2A46C0",
        headerOutline: "#606E85",
      },
    },
  },
  plugins: [],
};

