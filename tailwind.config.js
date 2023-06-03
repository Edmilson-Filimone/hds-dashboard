/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main":"#F0F2F5",
        "secondary":"#FFFFFF",
        "sidebar":"#313131",
        "sidebar-hover":"#626262",
        "sidebar-clicked":"#616161",
        "btn-clicked":"#626262",
        "dark-mode":"#202124",
        "gray-shadow":"#DDDDDD",
        "card-label":"#9A9A9A",
        "card-value":"#333333",
        "title":"#333333",
        "sub-title":"#9A9A9A",
        "outline":"#DFDFDF",
      },
    },
  },
  plugins: [],
}

