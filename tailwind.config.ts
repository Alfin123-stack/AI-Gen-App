import type { Config } from "tailwindcss";
import lineClamp from "@tailwindcss/line-clamp";
import defaultTheme from "tailwindcss/defaultTheme";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [lineClamp],
};
export default config;
