import React from "react";
import {
  MainNav,
  MainNavItem,
  Nav,
  NavContainer,
  NavLink,
  SecondaryNav,
  SecondaryNavItem,
  SecondaryNavLink,
} from "./ModalNav.styles";

const ModalNav = () => {
  return (
    <Nav>
      <NavContainer>
        <MainNav>
          <MainNavItem>
            <NavLink to={"/news"}>News</NavLink>
          </MainNavItem>
          <MainNavItem>
            <NavLink to="/schedules">Schedules</NavLink>
          </MainNavItem>
          <MainNavItem>
            <NavLink to="/rankings">Rankings</NavLink>
          </MainNavItem>
        </MainNav>
        <SecondaryNav>
          <SecondaryNavItem>
            <SecondaryNavLink to="/user/login">Login</SecondaryNavLink>
          </SecondaryNavItem>
          <SecondaryNavItem>
            <SecondaryNavLink to="/user/sign-up">Sign Up</SecondaryNavLink>
          </SecondaryNavItem>
        </SecondaryNav>
      </NavContainer>
    </Nav>
  );
};

export default ModalNav;
