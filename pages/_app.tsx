import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import TopBar from "../components/top_bar";
import Footer from "../components/footer";
import dynamic from "next/dynamic";
import { ToastProvider } from "react-toast-notifications";
import { NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

const NearProvider: NextPage<Props> = dynamic(
  () => import("../contexts/near_context"),
  { ssr: false }
);

const MyApp = ({ Component, pageProps }: AppProps) => {
  /** TO BE EXATRACTED */
  const mediaQuery = window.matchMedia("(max-width: 1024px)");
  const [isMobile, setIsMobile] = useState<boolean>(mediaQuery.matches);
  const handleMediaQueryChange = (e: MediaQueryListEvent) => {
    setIsMobile(e.matches);
  };
  useEffect(() => {
    mediaQuery.addListener(handleMediaQueryChange);
  }, [mediaQuery]);
  /** END TO BE EXTRACTED */
  pageProps.isMobile = isMobile;

  return (
    <>
      <Head>
        <title>Artivist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastProvider
        placement="top-center"
        autoDismiss={true}
        autoDismissTimeout={4000}
      >
        <NearProvider>
          <TopBar className="z-40 relative" isMobile={isMobile} />
          <Component {...pageProps} />
          <Footer className="mt-64" />
        </NearProvider>
      </ToastProvider>
    </>
  );
};

export default MyApp;
