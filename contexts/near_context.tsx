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

import { AccountState, setupWalletSelector, WalletSelector } from "@near-wallet-selector/core";
import {
  setupModal,
  WalletSelectorModal,
} from "@near-wallet-selector/modal-ui";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupSender } from "@near-wallet-selector/sender";
import { setupMathWallet } from "@near-wallet-selector/math-wallet";
import { setupNightly } from "@near-wallet-selector/nightly";
import { setupLedger } from "@near-wallet-selector/ledger";
import { map, distinctUntilChanged } from "rxjs";
import { setupWalletConnect } from "@near-wallet-selector/wallet-connect";



type nearContextType = {
  isReady: boolean;
  isPending: boolean;
  accountId: string | null;
  getNFTS: (accountId: string) => Promise<Array<NFT>>;
  createMetadata: (metadata: MetadataDto) => Promise<void>;
  showSelector: () => void;
  DisconnectWallet: () => void;
};

const nearContextDefaultValues: nearContextType = {
  isReady: false,
  accountId: null,
  isPending: false,
  getNFTS: () => Promise.resolve([]),
  createMetadata: async () => {},
  showSelector: () => {},
  DisconnectWallet: () => {},
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

  const { addToast } = useToasts();

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
        setupWalletConnect({
          projectId: "c4f79cc...",
          metadata: {
            name: "NEAR Wallet Selector",
            description: "Example dApp used by NEAR Wallet Selector",
            url: "https://github.com/near/wallet-selector",
            icons: ["https://avatars.githubusercontent.com/u/37784886"],
          },
        }),
      ],
    });
    const _modal = setupModal(_selector, { contractId: "ghostgun13.testnet" });
    const state = _selector.store.getState();
    syncAccountState(localStorage.getItem("accountId"), state.accounts);

    window.selector = _selector;
    window.modal = _modal;

    setSelector(_selector);
    setModal(_modal);
  }, []);

  useEffect(() => {
    init().catch((err) => {
      console.error(err);
      alert("Failed to initialise wallet selector");
    });
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

  const showSelector = () => {
    if (modal) {
      console.log("showSelector",modal);
      
      modal.show();
    }
  };

  const DisconnectWallet = async () => {
    try {
      const wallet = await selector.wallet();

    await wallet.signOut()
      setAccountId(null);
      addToast("Disconnected", { appearance: "success" });
    } catch (error) {
      addToast("Error disconnecting wallet, please try again!", {
        appearance: "error",
      });
      console.log("Disconnect wallet error", error);
    }
  };

  const BOATLOAD_OF_GAS = Big(3)
    .times(10 ** 13)
    .toFixed();

  const createMetadata = async (metadata: MetadataDto) => {
    const wallet = await selector.wallet();
    try {
      console.log("accountId", accountId);
      console.log("metadata", metadata);
      const total_minted = await wallet.view({
        methodName: "nft_total_supply",
        args: { account_id: accountId },
      });
      console.log("nft_total_supply", total_minted);
      const props = {
        token_id: `gg13-${total_minted}`,
        metadata,
        receiver_id: accountId,
      };
      console.log("props", props);
      console.log("{...props}", { ...props });
      console.log("big", BOATLOAD_OF_GAS);
      const result = await wallet.signAndSendTransaction({
        actions: [
          {
            type: "FunctionCall",
            params: {
              methodName: "nft_mint",
              args: { ...props },
              gas: BOATLOAD_OF_GAS,
              deposit: "10000000000000000000000",
            },
          },
        ],
      });

      // Convert base64 response to string
      // const data = Buffer.from(result.status.SuccessValue, "base64").toString(
      //   "binary"
      // );
    } catch (error) {
      console.log("createMetadata error", error);
    }
  };

  const getNFTS = async (accountId: string) => {
    try {
      const result = await selector.contract.view({
        methodName: "nft_tokens_for_owner",
        args: { account_id: accountId },
      });
      console.log("result", result);
      return result;
    } catch (error) {
      console.log("getNFTS error", error);
    }
  };

  const value = {
    isReady,
    isPending,
    accountId,
    getNFTS,
    createMetadata,
    showSelector,
    DisconnectWallet,
  };

  return (
    <>
      <NearContext.Provider value={value}>{children}</NearContext.Provider>
    </>
  );
};

export default NearProvider;
