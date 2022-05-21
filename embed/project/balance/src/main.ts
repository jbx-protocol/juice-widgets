import "./style.css";

import { JsonRpcProvider } from "@ethersproject/providers";
import {
  getJBDirectory,
  getJBSingleTokenPaymentTerminalStore,
} from "juice-sdk";

const V2_PATH_REGEX = /\/v2\/p\/([0-9+])/;

const JUICEBOX_LOGO_SRC =
  "https://worker.snapshot.org/mirror?img=https%3A%2F%2Fcloudflare-ipfs.com%2Fipfs%2FQmNTrd3xuoS2EbfAiMTKCMBc3PeH27xZmiJsSS82aipW3S";

const formatWad = (wad: number) => (wad / 1e18).toFixed(2);
const getOptions = () => {
  const projectId = window.location.pathname.match(V2_PATH_REGEX)?.[1];
  if (!projectId)
    throw new Error(`No project id [location=${window.location}]`);

  return {
    projectId,
  };
};

const RPC_HOST =
  "https://mainnet.infura.io/v3/c2838024e339438fbe8a31d6754efe8a";
const provider = new JsonRpcProvider(RPC_HOST);

async function getBalance(projectId: string): Promise<string> {
  const terminals = await getJBDirectory(provider).terminalsOf(projectId);
  const primaryTerminal = terminals[0];

  const balance = await getJBSingleTokenPaymentTerminalStore(
    provider
  ).balanceOf(primaryTerminal, projectId);

  return balance.toString();
}

const renderApp = async () => {
  const app = document.querySelector<HTMLDivElement>("#app")!;

  try {
    const options = getOptions();

    const balance = await getBalance(options.projectId);
    const balanceFormatted = formatWad(parseInt(balance));

    app.innerHTML = `
    <main>
      <div>
        <span style="font-family: sans-serif;">Ξ</span>${balanceFormatted} in treasury
      </div>
      <a href="https://juicebox.money/#${window.location.pathname}" target="_blank" noopener noreferrer>
        <img src="${JUICEBOX_LOGO_SRC}" class="logo" />
      </a>
    </main>
    `;
  } catch (e) {
    console.error("Error :(", e);
  }
};

renderApp();
