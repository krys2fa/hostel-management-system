import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-pc-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#04A9F5",
          50: "#B3E6FE",
          100: "#9FE0FD",
          200: "#77D2FD",
          300: "#4EC5FC",
          400: "#26B8FB",
          500: "#04A9F5",
          600: "#0383BE",
          700: "#025D87",
          800: "#01374F",
          900: "#001118",
        },
        secondary: {
          DEFAULT: "#5B6B79",
          500: "#5B6B79",
        },
        success: {
          DEFAULT: "#1DE9B6",
          500: "#1DE9B6",
        },
        danger: {
          DEFAULT: "#F44236",
          500: "#F44236",
        },
        warning: {
          DEFAULT: "#F4C22B",
          500: "#F4C22B",
        },
        info: {
          DEFAULT: "#3EBFEA",
          500: "#3EBFEA",
        },
      },
      spacing: {
        sidebar: "264px",
        header: "74px",
      },
    },
  },
  plugins: [],
};

export default config;
