import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

const infuraKey = "c2838024e339438fbe8a31d6754efe8a";

export const createDefaultClient = () => {
  const { chains, provider } = configureChains(
    [chain.mainnet, chain.rinkeby],
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

  return { wagmiClient, chains };
};
