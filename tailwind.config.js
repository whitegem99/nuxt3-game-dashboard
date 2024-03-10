/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.vue", "./components/**/*.vue"],
  theme: {
    extend: {
      colors: {
        dark: {
          24: "#24242C",
          43: "#43434A",
          bd: "#BDBDBD",
        },
      },
      aspectRatio: {
        square: "1 / 1",
      },
    },
  },
  plugins: [],
};
