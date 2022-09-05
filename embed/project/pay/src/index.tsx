import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { useProvider, useSigner, WagmiConfig } from "wagmi";
import { createDefaultClient } from "./lib/wagmi/createClient";
import { AppContext, AppOptions } from "./contexts/AppContext";
import { JuiceProvider as DefaultJuice } from "juice-hooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const JuiceProvider = ({
  networkName,
  children,
}: {
  networkName?: "rinkeby" | "mainnet";
  children: JSX.Element;
}) => {
  const provider = useProvider();
  const { data: singer } = useSigner();

  return (
    <DefaultJuice provider={singer ?? provider} networkName={networkName}>
      {children}
    </DefaultJuice>
  );
};

const renderApp = (options: AppOptions) => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

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
    console.log("react::", e.data);
    if (e.data.method === "render") {
      const { options } = e.data;
      renderApp(options);
    }
  },
  false
);
