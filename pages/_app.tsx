import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import TopBar from "../components/top_bar";
import Footer from "../components/footer";
import dynamic from "next/dynamic";
import { ToastProvider } from "react-toast-notifications";
import { NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import Layout from "../components/layout";

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
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NearProvider>
      </ToastProvider>
    </>
  );
};

export default MyApp;
