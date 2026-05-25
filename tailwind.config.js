/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/data/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette de l'association — modifiable facilement ici
        cream: {
          DEFAULT: "#FBF8F1", // blanc cassé / lumineux
          50: "#FEFCF8",
          100: "#FBF8F1",
          200: "#F5EFE2",
        },
        sand: {
          DEFAULT: "#F0E7D6", // beige clair
          dark: "#E4D6BC",
        },
        gold: {
          DEFAULT: "#C7A24B", // doré doux
          light: "#D9BE7E",
          dark: "#A8842F",
        },
        bordeaux: {
          DEFAULT: "#7A2233", // bordeaux profond
          light: "#9A3346",
          dark: "#5C1825",
        },
        ink: {
          DEFAULT: "#14233F", // bleu profond
          light: "#23375C",
          soft: "#3C4D6E",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        script: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -15px rgba(20, 35, 63, 0.18)",
        card: "0 18px 50px -20px rgba(20, 35, 63, 0.22)",
        gold: "0 12px 40px -12px rgba(199, 162, 75, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slogan-in": {
          "0%": { opacity: "0", letterSpacing: "0.05em", transform: "translateY(10px)" },
          "100%": { opacity: "1", letterSpacing: "0.25em", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out both",
        "fade-in": "fade-in 1.2s ease-out both",
        "slogan-in": "slogan-in 1.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "slow-zoom": "slow-zoom 18s ease-out forwards",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
