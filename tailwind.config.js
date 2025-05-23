/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: { max: "120rem" },
        side: { max: "68.75rem" },
        tab: { max: "75em"},
        "tab-md": { max: "62.5em"},
        iside: "68.75rem",    
        "tab-sm": { max: "37.5em"},
        mb: { max: "31.25em"},   
        "mb-small": { max: "28.125em"},
        "mb-medium": { max: "25em"},
        xsmall: { max: "21.875em"},
      },
    },
  },
  plugins: [],
};
