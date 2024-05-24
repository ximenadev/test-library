/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  important: '#root',
  content: [
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D1C1C',
        brown: '#CDBAB1',
      },
    },
  },
  plugins: [],
}
