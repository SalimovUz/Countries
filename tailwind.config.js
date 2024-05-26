/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    boxShadow: {
        'bottom-10px': '0 10px 10px 0 rgba(0, 0, 0, 0.1)', // Adjust the color and opacity as needed
        // 'top-10px':'0 -10px 10px 0 rgba(156, 163, 175, 0.5)', // Adjust the color and opacity as needed
        'custom-gray': '0 0 8px rgba(156, 163, 175, 0.5)', // gray-400 is #9CA3AF
      },
  },
  plugins: [],
}