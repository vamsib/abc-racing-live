/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    prefix: "ds-",
    theme: {
        spacing:{
            "1": "4px",
            "2": "8px",
            "3": "12px",
            "4": "16px",
            "5": "20px",
        },
        fontFamily: {
            'body': ['"Open Sans"']
        },
        fontSize: {
            mainCopy: "1rem",
            smallCopy: "0.8rem",
            mediumCopy: "1.2rem",
            largeCopy: "1.4rem",
            xlCopy: "2rem",
            /* font icons */
            i1: "1rem",
            i2: "2rem",
            i3: "3rem",
            i4: "4rem"
        },
        screens: {
            md: '768px',
            lg: '1024px'
        },
        extend: {
            colors: {
                primary: '#FF1E00',
                primaryBg: '#F7F4F1',
                secondaryBg: '#15151E',
                highVis: '#FFFFFF',
                primaryForeground: "#FFF",
                primaryCopy: '#15151E'
            },
            
        },
    },
    plugins: [],
  }