import { styled } from "../../ds/stitches.config";

export const LivePositions = styled("table", {
  width: "100%",
  backgroundColor: "$secondaryBg",
  color: "#fff",
  fontSize: "$smallCopy",
  textAlign: "center",
  padding: "$1",
  thead: {
    textTransform: "uppercase",
  },
  "td:nth-child(even)": {
    backgroundColor: "rgb(48, 49, 52)",
  },
});
