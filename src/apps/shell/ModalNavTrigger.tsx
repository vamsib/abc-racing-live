import React, { useState } from "react";
import { Nav, MenuButton } from "./ModalNav.styles";
import { Icon } from "../../ds/icons/Icon";

type ModalNavTriggerProps = {
  isOpen: boolean;
  onToggle: () => void;
};

const ModalNavTrigger = ({ isOpen, onToggle }: ModalNavTriggerProps) => {
  return (
    <MenuButton onClick={onToggle}>
      <Icon
        size={{ "@initial": "medium", "@md": "large" }}
        className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}
      ></Icon>
    </MenuButton>
  );
};

export default ModalNavTrigger;
