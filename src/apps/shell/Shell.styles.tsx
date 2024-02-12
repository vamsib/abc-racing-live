import { styled, globalCss } from "../../ds/stitches.config";
import "../../ds/fonts/css/fontawesome.css";
import "../../ds/fonts/css/solid.css";

export const globalStyles = globalCss({
  html: { height: "100%", fontFamily: "Open Sans" },
  body: { height: "100%", margin: "0" },
  "#root": { height: "100%" },
  ".app": { height: "100%" },
});

export const StyledShell = styled("div", {
  display: "grid",
  height: "100%",
  gridTemplateRows:
    "[header-start] 10% [header-end main-start] 84% [main-end footer-start] 6% [footer-end]",
});

export const Header = styled("header", {
  backgroundColor: "$primary",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "$3",
  paddingRight: "$3",
  gridRow: "header-start / header-end",
});

export const Logo = styled("img", {
  height: "70%",
});

export const Main = styled("main", {
  gridRow: "main-start / main-end",
});

export const Footer = styled("footer", {
  gridRow: "footer-start / footer-end",
});
