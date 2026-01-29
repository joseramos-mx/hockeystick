import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme"; // 1. Importa el objeto por defecto

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 2. Accede a fontFamily a través de defaultTheme
        sans: ["var(--font-main)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;