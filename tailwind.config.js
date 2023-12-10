/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      'blue': '#3D63C2'
    },
    extend: {
      width: {
        'w3': '725px'
      },
      borderWidth: {
        '7': '7px'
      },
      boxShadow: {
        '2xl': '0 15px 40px rgba(61, 99, 194, 0.05)',
        '3xl': '0 30px 60px rgba(61, 99, 194, 0.1)'
      }
    }
  },
  plugins: [],
}

