import { NextPage } from "next";
import Link from "next/link";
import { Menu } from "../types";
import AuthNear from "./auth_near";

interface Props {
  menu: Array<Menu>;
  className?: string;
}

const NavBar: NextPage<Props> = ({ menu, className }) => {
  return (
    <>
      <div className={`${className}`}>
        <div className="flex justify-between items-center">
          {menu &&
            menu.map((menu) => (
              <div key={menu.title}>
                <Link href={menu.to}>
                  <a className="font-bold text-xl tracking-wider uppercase">
                    {menu.title}
                  </a>
                </Link>
              </div>
            ))}
        </div>
        <AuthNear />
      </div>
    </>
  );
};

export default NavBar;
