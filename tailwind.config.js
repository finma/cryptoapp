module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "black-custom": "#14161a",
        "black-card": "#1B1D22",
        gold: "#ffd700",
      },
      backgroundImage: {
        banner: "url('src/assets/img/banner.jpg')",
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
    },
  },
  variants: { extend: {} },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/line-clamp")],
};
