/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D8FF00",
        LightBg: "#DDDEE1",
        CardBg: "#FFFFFF",
        FooterTexto: "#787664",
        FooterTitle: "#0A142F",
        Fondo: "#f9f9fb",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        redhat: ["Red Hat Display", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
