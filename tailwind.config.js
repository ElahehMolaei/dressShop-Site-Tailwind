/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    fontFamily:{
      BZiba :['BZiba']
    },
    extend: {
      height: {
        '21rem': '21rem',
        '30rem':'30rem',
        '25rem':'25rem',
      }
    },
  },
  plugins: [],
}

