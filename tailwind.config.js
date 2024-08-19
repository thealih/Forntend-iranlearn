/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        yellow: "#fce200",
        black: "#1a1a1a",
        white: "#ffffff",
      },
      fontFamily: {
        sans: ["var(--primary-font)"],
        mono: ["var(--font-bold)"],
      },
    },
  },
  plugins: [],
};
