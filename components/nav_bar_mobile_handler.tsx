import { NextPage } from "next";
import { useState } from "react";
import { Menu } from "../types";
import IconMenuHamb from "./icons/icon_menu_hamb";
import NavBarMobile from "./nav_bar_mobile";
import TransitionOpacity from "./transition_opacity";

interface Props {
  menu: Array<Menu>;
  className?: string;
}

const NavBarMobileHandler: NextPage<Props> = ({ menu, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={`${className}`}>
        <IconMenuHamb
          className="w-6 text-primary"
          onClick={() => setIsOpen(true)}
        />
        <TransitionOpacity isShown={isOpen}>
          <NavBarMobile
            menu={menu}
            className="fixed w-screen h-screen top-0 left-0"
            closeMenu={() => setIsOpen(false)}
          />
        </TransitionOpacity>
      </div>
    </>
  );
};

export default NavBarMobileHandler;
