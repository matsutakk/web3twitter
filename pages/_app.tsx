import '../styles/globals.css'
import type { AppProps } from 'next/app'

import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum, chain.goerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "web3twitter",
  chains,
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider
}); 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
