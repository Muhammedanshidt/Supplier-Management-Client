/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo2': "url('./src/assets/Logo2.png')",
        'rubberTreeDesktop': "url('./src/assets/Rubber-tree-destop.jpeg')",
        'rubberTreeMobile': "url('./src/assets/Rubber-tree-mobile.jpeg')",
      },
      boxShadow: {
        // 'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 6px rgba(0, 0, 0, 0.3)',
      },
      borderWidth: {
        "border-top": "1px"
      }
    },
  },
  daisyui: {
    themes: 'light',
  },
  plugins: [
    daisyui
  ],
})

