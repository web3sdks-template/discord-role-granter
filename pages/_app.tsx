import type { AppProps } from "next/app";
import { ChainId, Web3sdksProvider } from "@web3sdks/react";
import { SessionProvider } from "next-auth/react";
import Web3sdksGuideFooter from "../components/Web3sdksGuideFooter";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdksProvider desiredChainId={activeChainId}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
        <Web3sdksGuideFooter />
      </SessionProvider>
    </Web3sdksProvider>
  );
}

export default MyApp;
