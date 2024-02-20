import { styled } from "../../ds/utils";
import "../../ds/fonts/css/fontawesome-reduced.css";
import "../../ds/fonts/css/solid.css";

export const StyledShell = styled("div", [
  "ds-h-full",
  "ds-grid",
  "ds-grid-rows-[[header-start]_10%_[header-end_main-start]_84%_[main-end_footer-start]_6%_[footer-end]]",
]);

export const Header = styled("header", [
  "ds-bg-primary",
  "ds-flex",
  "ds-justify-between",
  "ds-items-center",
  "ds-row-[header-start/header-end]",
  "ds-px-3",
]);

export const Logo = styled("img", ["ds-h-[70%]"]);

export const Main = styled("main", ["ds-row-[main-start/main-end]"]);

export const Footer = styled("footer", ["ds-row-[footer-start/footer-end]"]);
