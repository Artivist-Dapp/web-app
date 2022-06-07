import Link from "next/link";
import { NextPage } from "next";
import IconClose from "./icons/icon_close";
import LogoSquare from "./logos/logo_square";
import { Menu } from "../types";
import SocialLinks from "./socials";

interface Props {
  menu: Array<Menu>;
  closeMenu: () => void;
  className?: string;
}

const NavBarMobile: NextPage<Props> = ({ menu, closeMenu, className }) => {
  return (
    <>
      <div
        className={`${className} 
          flex flex-col bg-primary px-4 text-on-primary
        `}
      >
        <div className="flex items-end h-20">
          <div className="w-full flex justify-between items-start">
            <LogoSquare className="h-14" />
            <IconClose className="w-6" onClick={closeMenu} />
          </div>
        </div>
        <div className="px-4 flex flex-col justify-evenly flex-grow">
          <div className="space-y-8">
            {menu.map((item) => (
              <div key={item.title}>
                <Link href={item.to}>
                  <a className="font-bold text-xl tracking-wider uppercase">
                    {item.title}
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <div className="w-full h-px bg-on-primary" />
          <div className="space-y-4">
            <p className="text-sm text-center uppercase font-bold">follow us</p>
            <SocialLinks
              className="flex justify-center items-center space-x-8"
              iconClass="w-6"
            />
          </div>
          <div className="w-full h-px bg-on-primary" />
          <div className="space-y-4">
            <div className="flex justify-evenly items-center">
              <Link href="/">
                <a className="text-center uppercase font-medium">
                  Privacy Policy
                </a>
              </Link>
              <Link href="/terms-conditions">
                <a className="text-center uppercase font-medium">
                  Terms & Conditions
                </a>
              </Link>
            </div>
            <div className="text-center w-full font-medium">
              <a
                href="mailto:support@artivist.org"
                target="_blank"
                rel="noreferrer"
              >
                support@artivist.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarMobile;
