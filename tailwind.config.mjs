/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0px 4px 8px 0px rgba(0, 0, 0, 0.16)",
        lightBlack: "0 6px 16px rgba(217,35,115,.16)",
      },
      colors: {
        black: "#1C1C1C",
        blue: "#171D52",
        primary: "#d92373", // "#F7E5CC",
        secondary: "#D92373",
        tertiary: "#f23084",
        white: "#FFFFFF",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        avenirnextbold: ["avenirnextbold", "sans-serif"],
        avenirnextregular: ["avenirnextregular", "sans-serif"],
        custom: ["Avenir-LT", "sans-serif"],
      },
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        15: "15",
      },
      spacing: {
        "6px": "0.375rem",
        "15px": "0.9375rem",
        128: "32rem",
        144: "36rem",
        440: "27.5rem",
      },
      fontSize: {
        6: "0.375rem",
        8: "0.5rem",
        10: "0.625rem",
        12: "0.75rem",
        14: "0.875rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        28: "1.75rem",
        30: "1.875rem",
        36: "2.25rem",
        40: "2.5rem",
        48: "3rem",
        56: "3.5rem",
        64: "4rem",
        80: "5rem",
        base: "1rem",
      },
    },
    screens: {
      lg: "1640px",
      md: "1025px",
      mob: {
        max: "767px",
      },
      mobTab: {
        max: "980px",
        min: "600px",
      },
      sm: "768px",
      smDesktop: {
        max: "1640px",
        min: "1025px",
      },
      tab: {
        max: "1024px",
        min: "768px",
      },
    },
  },
  plugins: [],
};
