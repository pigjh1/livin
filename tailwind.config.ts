export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Pretendard",
          "Apple SD Gothic Neo",
          "Malgun Gothic",
          "맑은 고딕",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        primary: "#9A450C",
        secondary: "#BCAAA4",
        dark: {
          bg: "#0f1117",
          card: "#1a1d27",
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translate(-50%, 10px)" },
          "100%": { opacity: "1", transform: "translate(-50%, 0)" },
        },
        checkPop: {
          "0%": { transform: "scale(0.6)", opacity: "0" },
          "60%": { transform: "scale(1.15)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.2s ease-out",
        "check-pop": "checkPop 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
