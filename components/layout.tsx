// import { LanguageSwitcher } from "next-export-i18n";
import Head from "next/head";
import { useState, useEffect } from "react";
import Footer from "./footer";
import TopBar from "./top_bar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const siteTitle = "Artivist";
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
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Sterexpower" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <TopBar className="z-40 relative" isMobile={isMobile} />
        {children}
        <Footer className="mt-64" />
      </main>
    </div>
  );
};

export default Layout;
