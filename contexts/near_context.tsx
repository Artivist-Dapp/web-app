import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useToasts } from "react-toast-notifications";
import nearConfig from "../near/config";
import { MetadataDto, NFT } from "../types";
import Big from "big.js";

import { map, distinctUntilChanged } from "rxjs";
import { setupWalletSelector } from "@near-wallet-selector/core";
import type { WalletSelector, AccountState } from "@near-wallet-selector/core";
import { setupModal } from "@near-wallet-selector/modal-ui";
import type { WalletSelectorModal } from "@near-wallet-selector/modal-ui";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupSender } from "@near-wallet-selector/sender";
import { setupMathWallet } from "@near-wallet-selector/math-wallet";
import { setupNightly } from "@near-wallet-selector/nightly";
import { setupLedger } from "@near-wallet-selector/ledger";
// WalletConnect
// import * as walletConnect from "@near-wallet-selector/wallet-connect";
// import walletConnectIconUrl from "@near-wallet-selector/wallet-connect/assets/wallet-connect-icon.png";


declare global {
  interface Window {
    selector: WalletSelector;
    modal: WalletSelectorModal;
  }
}

type nearContextType = {
  isReady: boolean;
  isPending: boolean;
  accountId: string | null;
  selector: WalletSelector|null;
  modal: WalletSelectorModal|null;
  accounts: Array<AccountState>;
  setAccountId: (accountId: string) => void;
};


const nearContextDefaultValues: nearContextType = {
  isReady: false,
  accountId: null,
  isPending: false,
  selector: null,
  modal: null,
  accounts: [],
  setAccountId: () => {},

};

const NearContext: React.Context<nearContextType> =
  createContext<nearContextType>(nearContextDefaultValues);

export function useNear() {
  return useContext(NearContext);
}

interface Props {
  children: ReactNode;
}

export const NearProvider = ({ children }: Props) => {
  const [isReady, setIsReady] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const [selector, setSelector] = useState<WalletSelector | null>(null);
  const [modal, setModal] = useState<WalletSelectorModal | null>(null);
  const [accountId, setAccountId] = useState<string | null>(null);
  const [accounts, setAccounts] = useState<Array<AccountState>>([]);

  const syncAccountState = (
    currentAccountId: string | null,
    newAccounts: Array<AccountState>
  ) => {
    if (!newAccounts.length) {
      localStorage.removeItem("accountId");
      setAccountId(null);
      setAccounts([]);

      return;
    }

    const validAccountId =
      currentAccountId &&
      newAccounts.some((x) => x.accountId === currentAccountId);
    const newAccountId = validAccountId
      ? currentAccountId
      : newAccounts[0].accountId;

    localStorage.setItem("accountId", newAccountId);
    setAccountId(newAccountId);
    setAccounts(newAccounts);
  };

  const init = useCallback(async () => {
    const _selector = await setupWalletSelector({
      network: "testnet",
      debug: true,
      modules: [
        setupNearWallet(),
        setupMyNearWallet(),
        setupSender(),
        setupMathWallet(),
        setupNightly(),
        setupLedger(),
        // setupWalletConnect({
        //   iconUrl: walletConnectIconUrl,
        //   projectId: "6aabdb27b3737c85c5ae5aa1640ea813",
        //   metadata: {
        //     name: "Artivist",
        //     description: "Where artists, activists, and organizations come together to make the world a better place",
        //     url: "https://artivistdao.org/",
        //     icons: ["https://avatars.githubusercontent.com/u/37784886"],
        //   },
        // }),
      ],
    });
    const _modal = setupModal(_selector, { contractId: "ghostgun13.testnet" });
    const state = _selector.store.getState();
    syncAccountState(localStorage.getItem("accountId"), state.accounts);

    window.selector = _selector;
    window.modal = _modal;
_modal.show()
    setSelector(_selector);
    setModal(_modal);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      init().catch((err) => {
        console.error(err);
        alert("Failed to initialise wallet selector");
      });
    }
  }, [init]);

  useEffect(() => {
    if (!selector) {
      return;
    }

    const subscription = selector.store.observable
      .pipe(
        map((state) => state.accounts),
        distinctUntilChanged()
      )
      .subscribe((nextAccounts) => {
        console.log("Accounts Update", nextAccounts);

        syncAccountState(accountId, nextAccounts);
      });

    return () => subscription.unsubscribe();
  }, [selector, accountId]);

  if (!selector || !modal) {
    return null;
  }

  const value = {
    isReady,
    isPending,
    selector,
    modal,
    accounts,
    accountId,
    setAccountId,
  };
  return (
    <>
      <NearContext.Provider value={value}>{children}</NearContext.Provider>
    </>
  );
};

export default NearProvider;
