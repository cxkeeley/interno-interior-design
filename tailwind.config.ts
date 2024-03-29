import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'hero-background': "url('../img/Background-hero.jpg')",
        'grid': "url('../img/grid.png')",
      },
      colors: {
        primary: {
          DEFAULT: '#292F36',
          hover: '#343e4a',
        },
        secondary: '#4d5053',
        accent: {
          DEFAULT: '#CDA274',
          secondary: '#F4F0EC',
          hover: '#b88c5d'
        }
      },
      fontFamily: {
        primary: "DM Serif Display",
        secondary: "Jost"
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
      }
    },
  },
  plugins: [],
};
export default config;
