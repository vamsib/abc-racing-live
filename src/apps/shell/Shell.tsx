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
  function toggleModalNav() {
    setIsModalNavOpen(!isModalNavOpen);
  }
  const location = useLocation();
  useEffect(() => {
    setIsModalNavOpen(false);
  }, [location]);
  return (
    <StyledShell>
      <Header>
        <Logo src={logo}></Logo>
        <ModalNavTrigger isOpen={isModalNavOpen} onToggle={toggleModalNav} />
      </Header>
      <Main>
        {children}
        {isModalNavOpen ? <ModalNav></ModalNav> : <></>}
      </Main>
      <Footer></Footer>
    </StyledShell>
  );
};

export default Shell;
