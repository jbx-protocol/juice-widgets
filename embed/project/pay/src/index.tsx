import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { JuiceProvider as DefaultJuice } from "juice-hooks";
import React from "react";
import ReactDOM from "react-dom/client";
import { useProvider, useSigner, WagmiConfig } from "wagmi";
import App from "./App";
import { AppContext, AppOptions } from "./contexts/AppContext";
import "./index.css";
import { createDefaultClient } from "./lib/wagmi/createClient";
import { NetworkName } from "./types";

const JuiceProvider = ({
  networkName,
  children,
}: {
  networkName?: NetworkName;
  children: JSX.Element;
}) => {
  const provider = useProvider();
  const { data: signer } = useSigner();

  return (
    <DefaultJuice provider={signer ?? provider} networkName={networkName}>
      {children}
    </DefaultJuice>
  );
};

const renderApp = (options: AppOptions) => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

  console.log("juice pay opts", options);

  if (options.projectVersion !== "2") {
    throw new Error("unsupported project version.");
  }

  const queryClient = new QueryClient();

  const { wagmiClient, chains } = createDefaultClient();
  root.render(
    <React.StrictMode>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <AppContext.Provider value={{ options, root }}>
            <JuiceProvider networkName={options.networkName ?? "mainnet"}>
              <QueryClientProvider client={queryClient}>
                <App />
              </QueryClientProvider>
            </JuiceProvider>
          </AppContext.Provider>
        </RainbowKitProvider>
      </WagmiConfig>
    </React.StrictMode>
  );
};

window.addEventListener(
  "message",
  (e) => {
    // TODO check host
    if (e.data.method === "render") {
      const { options } = e.data;
      renderApp(options);
    }
  },
  false
);
