import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { WagmiConfig } from "wagmi";
import App from "./App";
import { AppContext, AppOptions } from "./contexts/AppContext";
import "./index.css";
import { createDefaultClient } from "./lib/wagmi/createClient";

const renderApp = (options: AppOptions) => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

  console.log("🧃 juice pay opts", options);

  if (options.version !== "latest") {
    throw new Error("unsupported project version.");
  }

  const queryClient = new QueryClient();

  const { wagmiClient, chains } = createDefaultClient();
  root.render(
    <React.StrictMode>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <AppContext.Provider value={{ options, root }}>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
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
