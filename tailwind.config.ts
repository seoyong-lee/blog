import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    minWidth: {
      40: "10rem",
      60: "15rem",
      80: "20rem",
      100: "25rem",
    },
    maxWidth: {
      120: "30rem",
      160: "40rem",
      200: "50rem",
    },
    screens: {
      sm: "575px",
      md: "768px",
      lg: "990px",
      xl: "1200px",
      "2xl": "1536px",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["night", "winter", "black", "sunset", "forest", "nord"],
  },
};
export default config;
