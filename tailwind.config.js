/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "float-custom": "float-animation 3s ease-in-out infinite",
        "glow-custom": "glow-animation 2s ease-in-out infinite alternate",
        "spin-slow": "spin 3s linear infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        "float-animation": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-animation": {
          from: {
            "box-shadow":
              "0 0 20px #06b6d4, 0 0 30px #06b6d4, 0 0 40px #06b6d4",
          },
          to: {
            "box-shadow":
              "0 0 10px #8b5cf6, 0 0 20px #8b5cf6, 0 0 30px #8b5cf6",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
