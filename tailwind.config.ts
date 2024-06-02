import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
      scroll: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-25%)" }, // Adjust based on the total number of items
      },
      ReverseScroll: {
        "0%": { transform: "translateX(-50%)" },
        "100%": { transform: "translateX(0)" }, // Adjust based on the total number of items
      },
    },
    animation: {
      scroll: "scroll 45s linear infinite",
      ReverseScroll: "ReverseScroll 45s linear infinite",
    },
  },
  plugins: [],
};
export default config;
