/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        fontbody:["Bai Jamjuree"]
      },
      colors:{
        primary:{
        strongCyan:"hsl(171, 66%, 44%)",
        lightBlue:"hsl(233, 100%, 69%)",
        },
        grayishBlue:{
          100:"hsl(210, 10%, 33%)",
          600:"hsl(201, 11%, 66%)"
        }

      },
      backgroundImage:{
        headerBackground:"url(../images/bg-header-desktop.png)",
        mobileBackground:"url(../images/bg-header-mobile.png)"
      },
      translate:{
        transform50:"-50%"
      }
    },
  },
  plugins: [],
}

