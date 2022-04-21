import Logo from "./logo";
import { NextPage } from "next";
import AuthNear from "./auth_near";

const TopBar: NextPage = () => {
  return (
    <div className="w-full bg-accent/70 h-14 absolute z-40">
      <div className="flex justify-between items-center py-2  h-full max-w-screen-xl mx-auto">
        <Logo className="w-24" />
        <AuthNear />
      </div>
    </div>
  );
};

export default TopBar;
