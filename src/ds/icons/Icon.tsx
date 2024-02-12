import { styled } from "../stitches.config";

export const Icon = styled("i", {
  fontFamily: "Font Awesome 6 Free",
  color: "$primaryForeground",
  variants: {
    size: {
      small: {
        fontSize: "1rem",
      },
      medium: {
        fontSize: "2rem",
      },
      large: {
        fontSize: "3rem",
      },
    },
  },

  "@md": {
    variants: {
      size: {
        small: {
          fontSize: "1rem",
        },
        medium: {
          fontSize: "4rem",
        },
        large: {
          fontSize: "3rem",
        },
      },
    },
  },
});
