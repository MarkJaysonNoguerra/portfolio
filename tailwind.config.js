import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A178B9",
        secondary: "#B280CF",
      },
      keyframes: {
        slideDown: {
          from: {
            transform: "translateY(-150px)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        slideToRight: {
          from: {
            transform: "translateX(-150px)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
