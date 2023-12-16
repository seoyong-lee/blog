module.exports = {
  mode: "jit",
  purge: {
    enabled: process.env.NODE_ENV === "production",
    safeList: [],
    content: ["./index.html", "./src/**/*.tsx", "./src/**/*.ts"],
  },
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
  variants: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["forest", "night", "winter", "black", "light", "sunset", "nord"],
  },
};
