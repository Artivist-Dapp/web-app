import Logo from "./logos/logo";
import NavBar from "./nav_bar";
import { NextPage } from "next";
import NavBarMobileHandler from "./nav_bar_mobile_handler";
import { useEffect, useState } from "react";
import { Menu } from "../types";
import { useRouter } from "next/router";

interface Props {
  className?: string;
  isMobile?: boolean;
}

const TopBar: NextPage<Props> = ({ isMobile, className }) => {
  const menu: Array<Menu> = [];
  const router = useRouter();
  const scrollTopOrHome = () => {
    if (router.pathname === "/") {
      window.scrollTo(0, 0);
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <div className={`${className} w-full h-20 lg:h-36 flex flex items-end`}>
        <div className="w-full flex justify-between items-start page-max-width">
          <Logo
            className="h-14 lg:h-[6.2rem] text-primary"
            onClick={scrollTopOrHome}
          />
          {/* {isMobile ? (
            <NavBarMobileHandler menu={menu} />
          ) : (
            <NavBar menu={menu} />
            )} */}
          <NavBar menu={menu} />
        </div>
      </div>
    </>
  );
};

export default TopBar;
