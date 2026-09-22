import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-bg)",
        primary: "var(--color-primary)",
        surface: "var(--color-surface)",
        text: "var(--color-text)"
      }
    }
  },
  plugins: []
};

export default config;
