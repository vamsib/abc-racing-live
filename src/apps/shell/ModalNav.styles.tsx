import { Link } from "react-router-dom";
import { styled } from "../../ds/stitches.config";

export const Nav = styled("nav", {
  position: "absolute",
  width: "100%",
  height: "90%",
  backgroundColor: "transparent",
  top: "10%",
});

export const MenuButton = styled("button", {
  background: "none",
  border: "0 none",
});

export const NavContainer = styled("div", {
  height: "100%",
  width: "80%",
  position: "absolute",
  right: "0",
  backgroundColor: "$highVis",
  boxShadow: "3px 5px 6px 2px #000",

  "@md": {
    width: "60%",
  },
});

export const MainNav = styled("ul", {
  listStyleType: "none",
  padding: "0",
  margin: "0",
});

export const MainNavItem = styled("li", {
  padding: "$3 $2",
  "&:hover": {
    backgroundColor: "#ccc",
  },
});

export const SecondaryNav = styled("ul", {
  listStyleType: "none",
  padding: "0",
  margin: "0",
  borderTop: "1px solid #ccc",
});

export const SecondaryNavItem = styled("li", {
  padding: "$3 $2",
  "&:hover": {
    backgroundColor: "#ccc",
  },
});

export const NavLink = styled(Link, {
  color: "$primaryCopy",
  textDecoration: "none",
  fontSize: "$mediumCopy",
  "@md": {
    fontSize: "$xlCopy",
  },
});

export const SecondaryNavLink = styled(Link, {
  color: "$primaryCopy",
  textDecoration: "none",
  fontSize: "$mainCopy",
  "@md": {
    fontSize: "$largeCopy",
  },
});
