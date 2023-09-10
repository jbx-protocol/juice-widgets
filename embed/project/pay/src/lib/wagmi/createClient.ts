import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import { NetworkName } from "../../types";

const infuraKey = "c2838024e339438fbe8a31d6754efe8a";

export const createDefaultClient = (network: NetworkName) => {
  const { chains, provider } = configureChains(
    [network === "goerli" ? chain.goerli : chain.mainnet],
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
