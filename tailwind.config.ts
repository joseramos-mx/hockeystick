import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme"); // Importar defaultTheme

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Aquí ocurre la magia:
        // Ponemos tu variable PRIMERO en la pila de fuentes sans
        sans: ["var(--font-plus-jakarta)", ...fontFamily.sans],
      },
      // ... el resto de tu config
    },
  },
  plugins: [],
};
export default config;