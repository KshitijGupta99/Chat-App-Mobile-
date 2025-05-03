/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary:'#FF90BB',
        accent: '#F8F8E1',
        secondary: '#FFC1DA',
        tertiary: '#8ACCD5'
      }
    },
  },
  plugins: [],
}