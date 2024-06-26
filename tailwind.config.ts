import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg":
          "linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url('https://github.com/MILKYWAY-COOP/MilkyWay/blob/main/images/img1.jpg?raw=true')",
        "custom-bg1":
          "linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url('/milkysky.webp')",
        "custom-bg2":
          "linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url('/milkysky2.webp')",
        "custom-bg4":
          "linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url('/milkysky4.webp')",
        "custom-bg5":
          "linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url('/flag.jpeg')",
        "custom-bg6":
          "linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url('/blackboard.jpeg')",
        stars: "url('/bg.png')",
        koimbi: "url('/Koimbi.png')",
      },
      colors: {
        white: "#fff",
        darkBlue: "#15194B",
        fadedDarkBlue: "rgba(4, 3, 57, 0.9)",
        turquoise: "rgb(0, 255, 255)",
        grey: "#D2D2D2",
        greyB: "#C7C7C7",
        contrast1: "#FFCC00",
        contrast2: "#15194B",
        skyBlue: "#17468D",

        acc1: "#071031",
        acc2: "#314E10",
        acc3: "#11294A",
        acc4: "#0E062E",
        acc5: "#50084C",
      },
      fontFamily: {
        comfota: ["Poppins", "sans-serif"],
        blogTitle: ["Playfair Display", "sans-serif"],
        blogBody: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
export default config;
