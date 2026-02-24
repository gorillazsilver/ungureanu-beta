import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "395px",
        md: "838px",
        lg: "1124px",
        xl: "1440px",
      },
      backgroundImage: {
        "abstract-gradient": `
          radial-gradient(circle at 120% 40%, #ff1654, transparent 60%),
          radial-gradient(circle at 310% 30%, #000000, transparent 60%)
        `,
        "gradient-conic":
          "conic-gradient(from 0deg, #023d82, #0461ab, #023d82)",
      },

      fontFamily: {
        "stint-ultra-expanded": ["var(--font-stint-ultra-expanded)"],
        "pontano-sans": ["var(--font-pontano-sans)"],
        "luxurious-script": ["var(--font-luxurious-script)"],
        "familjen-grotesk": ["var(--font-familjen-grotesk)"],
      },
    },
  },
  plugins: [],
};
export default config;
