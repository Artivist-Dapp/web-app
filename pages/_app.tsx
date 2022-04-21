import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import TopBar from "../components/top_bar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className="z-0">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
