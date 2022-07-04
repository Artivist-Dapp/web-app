import Logo from "./logos/logo";
import NavBar from "./nav_bar";
import { NextPage } from "next";
import { Menu } from "../types";
import { useRouter } from "next/router";
import LogoSquare from "./logos/logo_square";

interface Props {
  className?: string;
  isMobile?: boolean;
}

const TopBarDashboard: NextPage<Props> = ({ isMobile, className }) => {
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
      <div className={`${className} w-full h-20 lg:h-36 flex`}>
        <div className="w-full flex justify-between items-center page-max-width">
        
          {/* {isMobile ? (
            <NavBarMobileHandler menu={menu} />
          ) : (
            <NavBar menu={menu} />
            )} */}
          <NavBar menu={menu} />
          <LogoSquare
            className="h-14 lg:h-[6.2rem] text-primary"
            onClick={scrollTopOrHome}
          />
        </div>
      </div>
    </>
  );
};

export default TopBarDashboard;
