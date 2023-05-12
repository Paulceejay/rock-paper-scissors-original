/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "490px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "triangle-bg-img": "url('/triangle.svg')",
      },
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
        modalColor: "#000000",
      },
      boxShadow: {
        gameShadow: "0px 10px 1px 1px",
        myInner: "inset 0px 6px 6px",
      },
      dropShadow: {
        paperShadow: "7px 7px 7px 7px rgba(72, 101, 244, 0.25)",
      },
    },
  },
  plugins: [],
};

