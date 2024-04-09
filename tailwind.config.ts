import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg':
          "linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url('https://github.com/MILKYWAY-COOP/MilkyWay/blob/main/images/img1.jpg?raw=true')",
          "stars": "url('/bg.png')",
          "koimbi": "url('/Koimbi.png')",
      },
      colors: {
        white: '#ffffff',
        darkBlue: '#15194B',
        fadedDarkBlue: 'rgba(4, 3, 57, 0.9)',
        turquoise: 'rgb(0, 255, 255)',
        grey: '#D2D2D2',
        greyB: '#C7C7C7',
        contrast1: '#FFCC00',
        contrast2: '#15194B',
        skyBlue: '#17468D',
      },
      fontFamily: {
        comfota: ['Poppins', 'sans-serif'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
    },
  },
  plugins: [],
};
export default config;
