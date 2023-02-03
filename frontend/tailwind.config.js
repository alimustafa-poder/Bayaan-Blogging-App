/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        shake: "shake 0.9s ease-in-out 0s infinite",
        fontColor: "fontColor 8s ease 0s infinite",
      },
      keyframes: {
        shake: {
          "0%": {transform: "translateX(-2px)"},
          "10%": {transform: "translateX(2px)"},
          "20%": {transform: "translateX(-2px)"},
          "30%": {transform: "translateX(2px)"},
          "40%": {transform: "translateX(-2px)"},
          "50%": {transform: "translateX(-2px)"},
          "60%": {transform: "translateX(2px)"},
          "70%": {transform: "translateX(-2px)"},
          "80%": {transform: "translateX(2px)"},
          "90%": {transform: "translateX(-2px)"},
          "100%": {transform: "translateX(2px)"},
        },
        fontColor: {
          "0%": {color: "blue", opacity: 1},
          "100%": {color: "yellow", opacity: 1},
        },
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
