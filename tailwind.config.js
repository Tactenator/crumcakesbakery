/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "**/*.{html, js}",
    "**/**/*.{html, js}",
    "./index.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      backgroundColor: {
        background: "#fafafa",
      },
      colors: {
        text: "#090608",
        background: "#fdfcfd",
        primary: "#f782b9",
        secondary: "#F3F782",
        accent: "#82F7C1",
        link: "#b2e4e8",
        footer: "#282c2f",
      },
      backgroundImage: {
        "hero-1": "./public/img/bg-1.jpg",
      },
      fontFamily: {
        fredoka: ["Fredoka", "sans-serif"],
      },
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss",
    require("flowbite/plugin"),
    require("tw-elements/dist/plugin.cjs"),
  ],
};
