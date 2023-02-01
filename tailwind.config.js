/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container:{
      center:true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "4rem",
        xl: "4rem",
        "2xl": "4rem",
      }
  },
    extend: {
      colors:{
        "w-yellow" : "#3EA8E3",
        "w-black" : "#1a1a1a",
        "w-grey" : "#0C3457",
        "p-grey" : "#999999",
        // "w-yellow" : "#CDB30C",
        // "w-black" : "#1a1a1a",
        // "w-grey" : "#232429",
        // "p-grey" : "#999999",
      },
      fontFamily:{
        "roboto":["Roboto","sans-serif"],
        "roboto-con":["Roboto Condensed","sans-serif"]
      },
      fontSize:{
        "xs":"13px",
        "section" : "34px",
        "subsection" : "28px"
      },
      backgroundImage:{
        "hero":"url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
        "statistics" : "url('https://images.unsplash.com/photo-1459278558918-f94278c0f022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80')"
      }
    },
  },
  plugins: [],
}