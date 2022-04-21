import { NextPage } from "next";
import { useNear } from "../contexts/near_context";
import ButtonCta from "./buttons/button_cta";

interface Props {
  className?: string;
}

const AuthNear: NextPage<Props> = ({ className }) => {
  const { accountId, logout, show } = useNear();

  const handleAuth = () => {
    if (accountId) {
      logout();
    } else {
      show();
    }
  };
  return (
    <>
      <div className={`${className}`}>
        <ButtonCta
          cta={accountId ? "Logout" : "Login"}
          handleClick={handleAuth}
        />
      </div>
    </>
  );
};

export default AuthNear;
