/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(259, 100%, 65%)",
        secondary: "hsl(0, 100%, 67%)",

        neutral: {
          100: "hsl(0, 0%, 100%)",
          200: "hsl(0, 0%, 94%)",
          300: "hsl(0, 0%, 86%)",
          400: "hsl(0, 1%, 44%)",
          500: "hsl(0, 0%, 8%)",
        },
      },
    },
  },
  plugins: [],
};
