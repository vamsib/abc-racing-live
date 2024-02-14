import React, { MouseEventHandler, useState } from "react";
import { Nav, MenuButton } from "./ModalNav.styles";
import { Icon } from "../../ds/icons/Icon";
import { SROnlyText } from "../../ds/components/A11y.styles";

type ModalNavTriggerProps = {
  isOpen: boolean;
  onToggle: MouseEventHandler<HTMLAnchorElement>;
};

const ModalNavTrigger = ({ isOpen, onToggle }: ModalNavTriggerProps) => {
  return (
    <MenuButton href="?menu=on" onClick={onToggle}>
      <SROnlyText>Menu</SROnlyText>
      <Icon
        size={{ "@initial": "medium", "@md": "large" }}
        className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}
      ></Icon>
    </MenuButton>
  );
};

export default ModalNavTrigger;
