/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBlue: "#000814",
        mediumBlue: "#001D3D",
        lightBlue: "#003566",
        gold: "#FFC300",
        lightGold: "#FFD60A",
      },
      transitionProperty: {
        'background': 'background-color',
        'text': 'color',
      }
    },
  },
  plugins: [],
};
