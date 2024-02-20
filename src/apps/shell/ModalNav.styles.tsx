import { Link } from "react-router-dom";
import { styled, styledComponent } from "../../ds/utils";

export const Nav = styled("nav", [
  "ds-absolute",
  "ds-w-full",
  "ds-h-[90%]",
  "ds-top-[10%]",
  "ds-bg-transparent",
]);

export const MenuButton = styled("a", ["ds-border-0", "ds-bg-transparent"]);

export const NavContainer = styled("div", [
  "ds-h-full",
  "ds-w-[80%]",
  "md:ds-w-[60%]",
  "ds-absolute",
  "ds-right-[0]",
  "ds-bg-highVis",
  "ds-shadow-[3px_5px_6px_2px_#000]",
]);

export const MainNav = styled("ul", ["ds-list-none", "ds-p-0", "ds-m-0"]);

export const MainNavItem = styled("li", [
  "ds-px-3",
  "ds-py-2",
  "hover:ds-bg-[#ccc]",
]);

export const SecondaryNav = styled("ul", [
  "ds-list-none",
  "ds-p-0",
  "ds-m-0",
  "ds-border-t",
  "ds-border-solid",
  "ds-border-[#ccc]",
]);

export const SecondaryNavItem = styled("li", [
  "ds-px-3",
  "ds-py-2",
  "hover:ds-bg-[#ccc]",
]);

export const NavLink = styledComponent(Link, [
  "ds-text-primaryCopy",
  "ds-text-mediumCopy",
  "md:ds-text-xlCopy",
  "ds-no-underline",
]);

export const SecondaryNavLink = styledComponent(Link, [
  "ds-text-primaryCopy",
  "ds-text-mainCopy",
  "md:ds-text-largeCopy",
  "ds-no-underline",
]);

export const LanguageSwitcher = styled("ul", []);

export const LanguageSelector = styled("button", []);
