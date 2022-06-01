import { NextPage } from "next";
import { useNear } from "../contexts/near_context";
import ButtonCta from "./buttons/button_cta";

interface Props {
  className?: string;
}

const AuthNear: NextPage<Props> = ({ className }) => {
  const { accountId, DisconnectWallet, showSelector } = useNear();

  const handleAuth = () => {
    if (accountId) {
      DisconnectWallet();
    } else {
      showSelector();
    }
  };
  return (
    <>
      <div className={`${className}`}>
        <button
          className="uppercase text-primary lg:text-lg font-bold tracking-widest lg:tracking-[0.3rem]
          border-b border-primary
           hover:text-primary-hover clickable"
          onClick={handleAuth}
        >
          {accountId ? "Logout" : "join us!"}
        </button>
      </div>
    </>
  );
};

export default AuthNear;
