import React from "react";
import { useTranslation } from "react-i18next";
import {
  LanguageSelector,
  LanguageSwitcher,
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
  const { t, i18n } = useTranslation();
  console.log(t("News"));
  return (
    <Nav>
      <NavContainer>
        <MainNav>
          <MainNavItem>
            <NavLink to={"/news"}>{t("News")}</NavLink>
          </MainNavItem>
          <MainNavItem>
            <NavLink to="/schedules">{t("Schedules")}</NavLink>
          </MainNavItem>
          <MainNavItem>
            <NavLink to="/rankings">{t("Rankings")}</NavLink>
          </MainNavItem>
        </MainNav>
        <SecondaryNav>
          <SecondaryNavItem>
            <SecondaryNavLink to="/user/login">{t("Login")}</SecondaryNavLink>
          </SecondaryNavItem>
          <SecondaryNavItem>
            <SecondaryNavLink to="/user/sign-up">
              {t("SignUp")}
            </SecondaryNavLink>
          </SecondaryNavItem>
        </SecondaryNav>
        <LanguageSwitcher>
          <LanguageSelector onClick={() => i18n.changeLanguage("en")}>
            English
          </LanguageSelector>
          <LanguageSelector onClick={() => i18n.changeLanguage("es")}>
            Spanish
          </LanguageSelector>
        </LanguageSwitcher>
      </NavContainer>
    </Nav>
  );
};

export default ModalNav;
