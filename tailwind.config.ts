import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
      "3xl": "3rem",
      "4xl": "4rem",
    },
    fontFamily: {
      default: [
        "var(--font-roboto-flex)",
        { fontVariationSettings: '"wdth" 100, "wght" 400' },
      ],
      wide: [
        "var(--font-roboto-flex)",
        { fontVariationSettings: '"wdth" 150, "wght" 400, "slnt" -10' },
      ],
      condensed: [
        "var(--font-roboto-flex)",
        { fontVariationSettings: '"wdth" 10, "wght" 200' },
      ],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#050505",
    },
    extend: {},
  },
  plugins: [],
};

export default config;
