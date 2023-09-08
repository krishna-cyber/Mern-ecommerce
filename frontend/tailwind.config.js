/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "URL('https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg')",
      },
    },
  },
  plugins: [],
  preflight: false,
};
