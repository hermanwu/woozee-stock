/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(red|green|blue|orange|purple|lime)-(100|500|700)/, // You can display all the colors that you need
      variants: ["lg", "hover", "focus", "lg:hover"], // Optional
    },
  ],
};
