module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "6rem",
        lg: "6rem",
        xl: "6rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "rtw-1": "#A904BF",
        "rtw-2": "#C004D9",
        "rtw-3": "#ECBBF2",
        "rtw-4": "#261B14",
        "rtw-5": "#F2F2F2",
        book: "#FF7D63",
        book2: "#F5F3F8",
      },
      fontFamily: {
        gara: ["Gara", "sans-serif"],
        yapari: ["Yapari", "sans-serif"],
      },
    },
  },
  plugins: [],
};
