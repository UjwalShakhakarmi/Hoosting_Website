/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "form-img": "url('assets/map.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        primary: "#024eaa",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#006dff",
          "head-background": "bg-gradient-to-r from-blue-900 to-indigo-1200",

          secondary: "#000",

          accent: "#ffff",

          neutral: "#000",

          "base-100": "#ffff",

          info: "#006dff",

          success: "#ffff",

          error: "#006dff",
        },
      },
      {
        mytheme: {
          primary: "#006dff",

          secondary: "#ffff",

          accent: "#000",

          neutral: "#ffff",

          "base-100": "#050306",

          info: "#ffff",

          success: "#006dff",

          error: "#000",
        },
      },
    ],
  },
};
