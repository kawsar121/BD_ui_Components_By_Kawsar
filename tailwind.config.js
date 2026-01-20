/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-gradient":
          "linear-gradient(35deg, rgb(6,0,151) 0%, rgb(130,4,255) 73%, rgb(193,15,255) 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
