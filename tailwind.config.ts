import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#CBD8D9",
        paper: "#E9EBEE",
        ink: "#17191B",
        muted: "#6B6F76"
      }
    }
  },
  plugins: []
};

export default config;
