import "../styles/globals.css";
import "@near-wallet-selector/modal-ui/styles.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import dynamic from "next/dynamic";
import { ToastProvider } from "react-toast-notifications";
import { NextPage } from "next";
import { ReactNode } from "react";
import Layout from "../components/layout";
import LayoutDashboard from "../components/layout_dashboard";

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
          <LayoutDashboard>
            <Component {...pageProps} />
          </LayoutDashboard>
        </NearProvider>
      </ToastProvider>
    </>
  );
};

export default MyApp;
