/** @type {import('tailwindcss').Config} */
const { nextui, commonColors } = require("@nextui-org/react");

export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: { primary: "#D8FF00", LightBg: "#DDDEE1", CardBg: "#FFFFFF" },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {},
        },
        dark: {
          colors: {},
        },
      },
      addCommonColors: true,
    }),
  ],
};
