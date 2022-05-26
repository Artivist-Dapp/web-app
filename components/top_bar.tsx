import Logo from "./logos/logo";
import NavBar from "./nav_bar";
import { NextPage } from "next";
import NavBarMobileHandler from "./nav_bar_mobile_handler";
import { Menu } from "../types";
import { useEffect, useState } from "react";

const TopBar: NextPage = () => {
  /** TO BE EXATRACTED */
  const [isMobile, setIsMobile] = useState(false);
  const mediaQuery = window.matchMedia("(max-width: 1024px)");
  const handleMediaQueryChange = (e: MediaQueryListEvent) => {
    setIsMobile(e.matches);
  };
  useEffect(() => {
    mediaQuery.addListener(handleMediaQueryChange);
  }, [mediaQuery]);
  /** END TO BE EXTRACTED */

  const menu: Array<Menu> = [];

  return (
    <>
      <div className="w-full h-20 lg:h-36 flex flex items-end">
        <div className="w-full flex justify-between items-start page-max-width">
          <Logo className="h-14 lg:h-[6.2rem] text-primary" />
          {isMobile ? (
            <NavBarMobileHandler menu={menu} />
          ) : (
            <NavBar menu={menu} />
          )}
        </div>
      </div>
    </>
  );
};

export default TopBar;
