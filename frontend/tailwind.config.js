/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        background_glass: "var(--color-background_glass)",
        primary: "var(--color-text_primary)",
      },
    },
  },
  plugins: [],
}
