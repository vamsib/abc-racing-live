import { styled } from "../../ds/stitches.config";

export const NewsPage = styled("div", {
  margin: "$3",
});

export const NewsList = styled("ol", {
  listStyleType: "none",
  padding: "0",

  "@md": {
    display: "grid",
    gridTemplateColumns:
      "[first-start] 1fr [first-end second-start] 1fr [second-end]",
    columnGap: "$3",
    rowGap: "$3",
  },
});

export const NewsListItem = styled("li", {
  display: "flex",
  marginBottom: "$3",
  gap: "$2",

  "@md": {
    flexDirection: "column",
    fontSize: "1.4rem",

    img: {
      width: "100%",
    },
  },
});
