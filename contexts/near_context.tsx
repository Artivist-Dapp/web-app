import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useToasts } from "react-toast-notifications";
import nearConfig from "../near/config";
import { MetadataDto, NFT } from "../types";
import Big from "big.js";

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
  const [accountId, setAccountId] = useState<string | null>(null);
  const [selector, setSelector] = useState<any>(null);
  const { addToast } = useToasts();

  const initWallet = async () => {
    const walletSelector = await import("near-wallet-selector");
    const NearWalletSelector = walletSelector.default;
    const selector = new NearWalletSelector(nearConfig());
    await selector.init();
    setSelector(selector);
  };

  const handleConnectWallet = async () => {
    if (selector) {
      try {
        const account = await selector.getAccount();
        console.log("account", account);
        setAccountId(account ? account.accountId : null);
        setIsReady(true);
        if (account && account.accountId) {
          addToast("Connected", { appearance: "success" });
        }
      } catch (error) {
        addToast("Error connecting wallet, please try again!", {
          appearance: "error",
        });
        console.log("Connect wallet error", error);
      }
    }
  };

  useEffect(() => {
    initWallet();
  }, []);

  useEffect(() => {
    handleConnectWallet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector]);

  useEffect(() => {
    if (selector) {
      selector.on("signIn", handleConnectWallet);
      return () => selector.off("signIn", handleConnectWallet);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector]);

  const showSelector = () => {
    selector.show();
  };

  const DisconnectWallet = async () => {
    try {
      await selector.signOut();
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
    try {
      const props = {
        token_id: "token-4",
        metadata,
        receiver_id: "miguelmenedes.testnet",
      };
      console.log("props", props);
      console.log("{...props}", { ...props });
      console.log("big", BOATLOAD_OF_GAS);
      const result = await selector.contract.signAndSendTransaction({
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
