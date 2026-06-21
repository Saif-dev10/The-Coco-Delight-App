/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cacao: {
          DEFAULT: "#3B2417",
          50: "#F8F3EA",
          100: "#EFE4D2",
          200: "#D9C2A4",
          300: "#C8A96A",
          400: "#A87F4A",
          500: "#6E4A30",
          600: "#54341F",
          700: "#3B2417",
          800: "#2A1A10",
          900: "#1A0F09",
        },
        cream: "#F8F3EA",
        gold: {
          DEFAULT: "#C8A96A",
          light: "#DDC393",
          dark: "#A8854C",
        },
        ivory: "#FFFDF9",
        beige: "#EFE4D2",
        charcoal: "#241F1C",
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        site: "1320px",
      },
      boxShadow: {
        card: "0 20px 60px -25px rgba(59, 36, 23, 0.35)",
        soft: "0 10px 30px -15px rgba(59, 36, 23, 0.25)",
      },
      animation: {
        fadeUp: "fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        fadeIn: "fadeIn 1.2s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(28px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
