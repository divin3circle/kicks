/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        afacadFlux: ["AfacadFlux-Regular", "sans-serif"],
        "afacadFlux-bold": ["AfacadFlux-Bold", "sans-serif"],
        "afacadFlux-extrabold": ["AfacadFlux-ExtraBold", "sans-serif"],
        "afacadFlux-semibold": ["AfacadFlux-SemiBold", "sans-serif"],
        "afacadFlux-light": ["AfacadFlux-Light", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#0061FF",
          200: "#0061FF",
          300: "#0061FF",
        },
        accent: {
          100: "#fbfbfd",
        },
        dark: {
          DEFAULT: "#000",
          100: "#8c8e98",
          200: "#666876",
          300: "#191d31",
        },
        danger: {
          DEFAULT: "#FF0000",
          100: "#FF0000",
        },
      },
    },
  },
  plugins: [],
};
