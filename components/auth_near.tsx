import { NextPage } from "next";
import { useNear } from "../contexts/near_context";
import ButtonCta from "./buttons/button_cta";
import { providers, utils } from "near-api-js";
import { setupModal } from "@near-wallet-selector/modal-ui";

import type {
  AccountView,
  CodeResult,
} from "near-api-js/lib/providers/provider";
interface Props {
  className?: string;
}
const SUGGESTED_DONATION = "0";
const BOATLOAD_OF_GAS = utils.format.parseNearAmount("0.00000000003")!;


const AuthNear: NextPage<Props> = ({ className }) => {
  const { selector, modal, accounts, accountId, setAccountId } = useNear();
  const handleAuth = () => {
    if (modal) {
      if (accountId) {
       console.log("accountId", accountId);
      }
      modal.show();
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
          {accountId ? "Disconnect" : "join us!"}
        </button>
      </div>
    </>
  );
};

export default AuthNear;
