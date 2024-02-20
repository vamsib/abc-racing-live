import React, { MouseEventHandler, useState } from "react";
import { MenuButton } from "./ModalNav.styles";
import { SROnlyText } from "../../ds/components/A11y.styles";

type ModalNavTriggerProps = {
  isOpen: boolean;
  onToggle: MouseEventHandler<HTMLAnchorElement>;
};

const ModalNavTrigger = ({ isOpen, onToggle }: ModalNavTriggerProps) => {
  return (
    <MenuButton href="?menu=on" onClick={onToggle}>
      <SROnlyText>Menu</SROnlyText>
      <i
        className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} ds-text-i2 md:ds-text-i3 ds-text-primaryForeground`}
      ></i>
    </MenuButton>
  );
};

export default ModalNavTrigger;
