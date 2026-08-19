/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // 💥 FORCE TAILWIND TO COMPILE THESE MOBILE CLASSES PERMANENTLY
  safelist: ["md:hidden", "hidden", "block", "md:flex", "flex"],
  theme: {
    extend: {},
  },
  plugins: [],
}
