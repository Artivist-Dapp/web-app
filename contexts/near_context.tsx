import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useToasts } from "react-toast-notifications";

type nearContextType = {
  isReady: boolean;
  isPending: boolean;
  accountId: string | null;
  show: () => void;
  logout: () => void;
};

const nearContextDefaultValues: nearContextType = {
  isReady: false,
  accountId: null,
  isPending: false,
  show: () => {},
  logout: () => {},
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
    const selector = new NearWalletSelector({
      networkId: "testnet",
      ui: {
        theme: "dark",
      },
      wallets: ["near-wallet", "sender-wallet", "ledger-wallet"],
      contract: { contractId: "test.near" },
    });
    await selector.init();
    setSelector(selector);
  };

  const handleSignIn = async () => {
    if (selector) {
      const account = await selector.getAccount();
      console.log("account", account);
      setAccountId(account ? account.accountId : null);
      setIsReady(true);
      addToast("Connected", { appearance: "success" });
    }
  };

  useEffect(() => {
    initWallet();
  }, []);

  useEffect(() => {
    handleSignIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector]);

  useEffect(() => {
    if (selector) {
      selector.on("signIn", handleSignIn);
      return () => selector.off("signIn", handleSignIn);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector]);

  const show = () => {
    selector.show();
  };

  const logout = async () => {
    await selector.signOut();
    setAccountId(null);
    addToast("Disconnected", { appearance: "success" });
  };

  const value = {
    isReady,
    isPending,
    accountId,
    show,
    logout,
  };

  return (
    <>
      <NearContext.Provider value={value}>{children}</NearContext.Provider>
    </>
  );
};

export default NearProvider;
