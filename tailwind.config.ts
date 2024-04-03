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
      },
      colors: {
        white: '#ffffff',
        darkBlue: 'rgba(4, 3, 57, 0.7)',
        fadedDarkBlue: 'rgba(4, 3, 57, 0.9)',
        turquoise: 'rgb(0, 255, 255)',
        grey: 'rgba(255, 255, 255, 0.7)',
      },
      fontFamily: {
        comfota: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
