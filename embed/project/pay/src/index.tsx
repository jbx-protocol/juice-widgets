import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

const infuraKey = "c2838024e339438fbe8a31d6754efe8a";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [infuraProvider({ apiKey: infuraKey }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Juicebox Pay",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const renderApp = (options: any) => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

  root.render(
    <React.StrictMode>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <App options={options} root={root} />
        </RainbowKitProvider>
      </WagmiConfig>
    </React.StrictMode>
  );
};

window.addEventListener(
  "message",
  (e) => {
    // TODO check host
    console.log("react::", e.data);
    if (e.data.method === "render") {
      const { options } = e.data;
      renderApp(options);
    }
  },
  false
);
