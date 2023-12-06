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
      }
    }
  },
  plugins: [],
}

