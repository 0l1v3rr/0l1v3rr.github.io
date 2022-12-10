/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        kali: "url('./assets/kali-wallpaper-1.jpg')",
      },
      colors: {
        "kali-black": "#1F2229",
        "kali-gray": "#E6E6E6",
        "kali-white": "#FFFFFF",
        "kali-red": "#EC0101",
        "kali-red-dark": "#D41919",
        "kali-pink": "#D71655",
        "kali-pink-dark": "#BF2E5D",
        "kali-yellow": "#FF8A18",
        "kali-yellow-dark": "#FEA44C",
        "kali-green": "#47D4B9",
        "kali-green-dark": "#5EBDAB",
        "kali-cyan": "#05A1F7",
        "kali-cyan-dark": "#49AEE6",
        "kali-blue": "#277FFF",
        "kali-blue-dark": "#367BF0",
        "kali-purple": "#8C42AB",
      },
      fontFamily: {
        "fira-code": ["Fira Code", "monospace"],
        segoe: "Segoe UI",
      },
      keyframes: {
        blink: {
          "0%": { opacity: 1 },
          "48%": { opacity: 1 },
          "50%": { opacity: 0 },
          "99%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        blink: "blink 1.5s linear infinite",
      },
      boxShadow: {
        "5xl": "0 10px 30px 0 rgba(0, 0, 0, 0.75)",
      },
    },
  },
  plugins: [],
};
