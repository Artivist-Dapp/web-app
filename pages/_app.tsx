import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import TopBar from "../components/top_bar";
import Footer from "../components/footer";
import dynamic from "next/dynamic";
import { ToastProvider } from "react-toast-notifications";
import { NextPage } from "next";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const NearProvider: NextPage<Props> = dynamic(
  () => import("../contexts/near_context"),
  { ssr: false }
);

const MyApp = ({ Component, pageProps }: AppProps) => {
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
          <TopBar className="z-40 relative"/>
          <Component {...pageProps} />
          <Footer />
        </NearProvider>
      </ToastProvider>
    </>
  );
};

export default MyApp;
