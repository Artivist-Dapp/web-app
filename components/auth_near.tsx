import { NextPage } from "next";
import { useNear } from "../contexts/near_context";

interface Props {
  className?: string;
}

const AuthNear: NextPage<Props> = ({ className }) => {
  const { openModal, disconnect, accountId } = useNear();

  const handleAuth = () => {
    accountId ? disconnect() : openModal();
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
          {accountId ? "Disconnect" : "join us!"}
        </button>
      </div>
    </>
  );
};

export default AuthNear;
