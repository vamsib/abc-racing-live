import React, { useEffect, useState } from "react";
import {
  globalStyles,
  StyledShell,
  Header,
  Logo,
  Main,
  Footer,
} from "./Shell.styles";
import logo from "../../ds/logos/logo.png";
import ModalNavTrigger from "./ModalNavTrigger";
import ModalNav from "./ModalNav";
import { useLocation } from "react-router-dom";

type ShellProps = object;

const Shell = ({ children }: React.PropsWithChildren<ShellProps>) => {
  globalStyles();
  const [isModalNavOpen, setIsModalNavOpen] = useState(false);
  function toggleModalNav(e: { preventDefault: () => void }) {
    e.preventDefault();
    setIsModalNavOpen(!isModalNavOpen);
  }
  let pageWithNav = false;
  const location = useLocation();
  if (location.search) {
    const params = new URLSearchParams(location.search);
    if (params.get("menu") == "on") {
      pageWithNav = true;
    }
  }
  useEffect(() => {
    setIsModalNavOpen(false);
  }, [location]);
  return (
    <StyledShell>
      <Header>
        <Logo src={logo} alt="ABC Racing logo"></Logo>
        <ModalNavTrigger isOpen={isModalNavOpen} onToggle={toggleModalNav} />
      </Header>
      <Main>
        {children}
        {isModalNavOpen || pageWithNav ? <ModalNav></ModalNav> : <></>}
      </Main>
      <Footer></Footer>
    </StyledShell>
  );
};

export default Shell;
