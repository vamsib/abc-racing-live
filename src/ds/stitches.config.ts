import { createStitches } from "@stitches/react";

export const { styled, createTheme, globalCss, getCssText } = createStitches({
    theme: {
      colors: {
        primary: '#FF1E00',
        primaryBg: '#F7F4F1',
        secondaryBg: '#15151E',
        highVis: '#FFFFFF',
        primaryForeground: "#FFF",
        primaryCopy: '#15151E'
      },
      fontSizes: {
        mainCopy: "1rem",
        smallCopy: "0.8rem",
        mediumCopy: "1.2rem",
        largeCopy: "1.4rem",
        xlCopy: "2rem",
      },
      space: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
      }
    },
    media: {
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)'
    },
    utils: {      
    },
  });

export const darkTheme = createTheme({
    colors: {
        primary: '#FF1E00',
        primaryBg: '#15151E',
        secondaryBg: '#F7F4F1',
        highVis: '#FFFFFF',
        primaryCopy: '#15151E'
    },
})
