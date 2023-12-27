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
  plugins: [],
};
