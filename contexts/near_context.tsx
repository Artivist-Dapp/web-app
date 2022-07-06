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
import { CodeResult, MetadataDto, NFT } from "../types";
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
import { setupLedger } from "@near-wallet-selector/ledger";

import { sha256 } from "js-sha256";

import * as nearAPI from "near-api-js";
import axios from "axios";

// WalletConnect
// import * as walletConnect from "@near-wallet-selector/wallet-connect";
// import walletConnectIconUrl from "@near-wallet-selector/wallet-connect/assets/wallet-connect-icon.png";

declare global {
  interface Window {
    selector: WalletSelector;
    modal: WalletSelectorModal;
  }
}
const BOATLOAD_OF_GAS = Big(3)
  .times(10 ** 13)
  .toFixed();

type nearContextType = {
  isReady: boolean;
  isPending: boolean;
  accountId: string | null;
  selector: WalletSelector | null;
  modal: WalletSelectorModal | null;
  accounts: Array<AccountState>;
  openModal: () => void;
  disconnect: () => void;
  deleteSubaccount: () => void;
  setAccountId: (accountId: string) => void;
  getNFTS: (accountId: string) => Promise<Array<NFT>>;
  createMetadata: (metadata: MetadataDto) => Promise<void>;
  signMessageToBackend: () => Promise<boolean>;
  checkAccountAvailability: (prefix: string) => Promise<boolean>;
  cenas: () => Promise<boolean>;
};

const nearContextDefaultValues: nearContextType = {
  isReady: false,
  accountId: null,
  isPending: false,
  selector: null,
  modal: null,
  accounts: [],
  openModal: () => {},
  disconnect: () => {},
  deleteSubaccount: () => {},
  setAccountId: () => {},
  createMetadata: async () => {},
  getNFTS: () => Promise.resolve([]),
  signMessageToBackend: async () => Promise.resolve(false),
  checkAccountAvailability: () => Promise.resolve(false),
  cenas: () => Promise.resolve(false),
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
    const _modal = setupModal(_selector, {
      contractId: "artivists.testnet",
      // contractId: "nft-example.ghostgun13.testnet",
    });
    const state = _selector.store.getState();
    syncAccountState(localStorage.getItem("accountId"), state.accounts);

    window.selector = _selector;
    window.modal = _modal;
    setSelector(_selector);
    setModal(_modal);
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      init();
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
  const openModal = () => {
    modal.show();
  };
  const disconnect = async () => {
    try {
      const wallet = await selector.wallet();
      await wallet.signOut();
    } catch (error) {
      console.log("Error disconnecting", error);
    }
  };
  const totalMinted = async () => {
    return await viewMethod("nft_total_supply");
  };
  const createMetadata = async (metadata: MetadataDto) => {
    try {
      const wallet = await selector.wallet();
      const { contract } = selector.store.getState();

      const tokenId = await totalMinted();

      const result = await wallet.signAndSendTransaction({
        signerId: accountId!,
        receiverId: contract!.contractId,
        actions: [
          {
            type: "FunctionCall",
            params: {
              methodName: "nft_mint",
              args: {
                token_id: `token-${tokenId}`,
                metadata,
                receiver_id: accountId,
              },
              gas: BOATLOAD_OF_GAS,
              deposit: "10000000000000000000000",
            },
          },
        ],
      });
      console.log("result", result);
    } catch (error) {
      console.log("createMetadata error", error);
    }
  };
  const getNFTS = async (accountId: string) => {
    try {
      const args = {
        account_id: accountId,
      };
      const result = await viewMethod("nft_tokens_for_owner", args);
      console.log("result", result);
      return result;
    } catch (error) {
      console.log("getNFTS error", error);
    }
  };

  const cenas = async () => {
    try {
      if (accountId) {
        const { keyStores } = nearAPI;
        const keyStore = new keyStores.BrowserLocalStorageKeyStore();
        const keyPair = await keyStore.getKey("testnet", accountId);

        const messageHash = sha256.array("message");
        const message = new Uint8Array(messageHash);
        const { signature, publicKey } = keyPair.sign(message);

        const params = {
          account_id: accountId,
          message: messageHash,
          public_key: publicKey.toString(),
          signature: Array.from(signature),
        };

        const result = await axios.post(
          "https://artivist-api-dev.onrender.com/validate",
          params
        );

        return result.data as boolean;
      }
      return false;
    } catch (error: any) {
      if (error && error.type === "AccountDoesNotExist") {
        console.log("Account not found");
        return true;
      }
      console.error(error);
      return false;
    }
  };

  const signMessageToBackend = async () => {
    try {
      if (accountId) {
        const { keyStores } = nearAPI;
        const keyStore = new keyStores.BrowserLocalStorageKeyStore();
        const keyPair = await keyStore.getKey("testnet", accountId);

        const messageHash = sha256.array("message");
        const message = new Uint8Array(messageHash);
        const { signature, publicKey } = keyPair.sign(message);

        const params = {
          account_id: accountId,
          message: messageHash,
          public_key: publicKey.toString(),
          signature: Array.from(signature),
        };

        const result = await axios.post(
          "https://8d56-2001-818-e8f3-d400-4d76-b942-97e7-bd08.eu.ngrok.io/validate",
          params
        );

        return result.data as boolean;
      }
      return false;
    } catch (error) {
      console.error("signMessageToBackend", error);
      return false;
    }
  };

  const checkAccountAvailability = async (prefix: string) => {
    try {
      const { network } = selector.options;
      const { providers } = nearAPI;
      const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });
      const acccountId = `${prefix}.${network.networkId}`;
      await provider.query({
        request_type: "view_account",
        account_id: acccountId,
        finality: "optimistic",
      });
      return false;
    } catch (error: any) {
      if (error && error.type === "AccountDoesNotExist") {
        console.log("Account not found");
        return true;
      }
      console.error(error);
      return false;
    }
  };

  const createSubaccount = async () => {
    try {
      const wallet = await selector.wallet();
      const result = await wallet.signAndSendTransaction({
        signerId: accountId!,
        receiverId: "artivists.testnet",
        actions: [
          {
            type: "FunctionCall",
            params: {
              methodName: "create_child_contract",
              args: {
                prefix: "ngo5",
              },
              gas: BOATLOAD_OF_GAS,
              deposit: "10000000000000000000000",
            },
          },
        ],
      });
      console.log("result", result);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteSubaccount = async () => {
    try {
      const wallet = await selector.wallet();
      const result = await wallet.signAndSendTransaction({
        signerId: accountId!,
        receiverId: "ngo5.artivists.testnet",
        actions: [
          {
            type: "FunctionCall",
            params: {
              methodName: "delete_this_account",
              args: {
                subaccount_id: "ngo5.artivists.testnet",
              },
              gas: BOATLOAD_OF_GAS,
              deposit: "0",
            },
          },
        ],
      });
      console.log("result", result);
    } catch (error) {
      console.error(error);
    }
  };

  const viewMethod = async (methodName: string, args?: any) => {
    try {
      const { contract } = selector.store.getState();
      const { network } = selector.options;
      const { providers } = nearAPI;
      const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });

      const result: CodeResult = await provider.query({
        request_type: "call_function",
        account_id: contract!.contractId,
        method_name: methodName,
        args_base64: args ? btoa(JSON.stringify(args)) : "",
        finality: "optimistic",
      });
      return JSON.parse(Buffer.from(result.result).toString());
    } catch (error) {
      console.error(`viewMethod ${methodName} error`, error);
    }
  };

  const value = {
    modal,
    isReady,
    selector,
    accounts,
    accountId,
    isPending,
    getNFTS,
    openModal,
    disconnect,
    setAccountId,
    createMetadata,
    deleteSubaccount,
    signMessageToBackend,
    checkAccountAvailability,
    cenas,
  };
  return (
    <>
      <NearContext.Provider value={value}>{children}</NearContext.Provider>
    </>
  );
};

export default NearProvider;
