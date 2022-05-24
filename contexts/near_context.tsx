import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useToasts } from "react-toast-notifications";
import nearConfig from "../near/config";
import Big from "big.js";

const BOATLOAD_OF_GAS = Big(3)
  .times(10 ** 13)
  .toFixed();

type nearContextType = {
  isReady: boolean;
  isPending: boolean;
  accountId: string | null;
  getNfts: () => void;
  createNft: () => void;
  showSelector: () => void;
  DisconnectWallet: () => void;
};

const nearContextDefaultValues: nearContextType = {
  isReady: false,
  accountId: null,
  isPending: false,
  getNfts: () => {},
  createNft: () => {},
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

  const createNft = async () => {
    if (!accountId) {
      addToast("Please connect your wallet", { appearance: "error" });
      return;
    }
    setIsPending(true);
    try {
      const result = await selector.contract.signAndSendTransaction({
        actions: [
          {
            type: "FunctionCall",
            params: {
              methodName: "nft_batch_mint",
              args: {
                owner_id: "ghostgun13.testnet",
                metadata: {
                  reference: "iNnCVW3TF3G_zV5R8J1tbo4xi359HX2DamTfb8Rf72I",
                  reference_hash: "iNnCVW3TF3G_zV5R8J1tbo4xi359HX2DamTfb8Rf72I",
                  extra: null,
                },
                num_to_mint: 1,
                royalty_args: null,
                split_owners: null,
              },
              gas: BOATLOAD_OF_GAS,
            },
          },
        ],
      });
      console.log("createNft result", result);
      addToast("NFT created", { appearance: "success" });
    } catch (error) {
      addToast("Error creating NFT, please try again!", {
        appearance: "error",
      });
      console.log("Create NFT error", error);
    }
    setIsPending(false);
  };

  const getNfts = async () => {
    try {
      const result = await selector.contract.view({
        methodName: "nft_tokens",
        args: { ...{ from_index: "0", limit: 100 } },
      });
      console.log("getNfts result", result);
      return result.map((nft: any) => {
        return nft.metadata.reference;
      });
    } catch (error) {
      addToast("Error getting NFTs, please try again!", {
        appearance: "error",
      });
      console.log("Get NFTs error", error);
      return null;
    }
  };

  const value = {
    isReady,
    isPending,
    accountId,
    getNfts,
    createNft,
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
