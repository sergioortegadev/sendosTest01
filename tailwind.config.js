/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        buttonColor: "rgb(96, 120, 184)",
        buttonColorHover: "rgb(90, 110, 160)",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/images/background.png')",
        "hero-path": "url('/assets/images/path3.png')",
      },
    },
  },
  plugins: [],
};
