/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      primary: "#435C34",
      secondary: "#83B366",
      accent: "#FA9F42",
      neutral: "#513B3C",
      "base-100": "#f5f5f4",
      info: "#3ABFF8",
      success: "#003E1F",
      warning: "red",
      error: "#C84C09",
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};