import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F58500",
        light: "#565D72",
        foreground: "#262E45",
      },
    },
  },
  plugins: [],
};
export default config;
