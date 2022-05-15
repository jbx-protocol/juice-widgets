import "./style.css";

const V2_PATH_REGEX = /\/v2\/p\/([0-9{1,10000}+])/;
const SUBGRAPH_URL =
  "https://api.thegraph.com/subgraphs/id/QmRoxhw8zQzsVpVj8Mf4hs5bYwTxTxyvZEpHPLZ6shVsXy";

const JUICEBOX_LOGO_SRC =
  "https://worker.snapshot.org/mirror?img=https%3A%2F%2Fcloudflare-ipfs.com%2Fipfs%2FQmNTrd3xuoS2EbfAiMTKCMBc3PeH27xZmiJsSS82aipW3S";

const projectQuery = `query project($id: ID!) {
  project(id: $id) {
    totalPaid
  }
}
`;
const CONTRACTS_VERSION = "2";

const formatWad = (wad: number) => (wad / 1e18).toFixed(2);
const getOptions = () => {
  const projectId = window.location.pathname.match(V2_PATH_REGEX)?.[1];
  if (!projectId)
    throw new Error(`No project id [location=${window.location}]`);

  return {
    projectId,
  };
};
const fetchProject = (id: string) => {
  return fetch(SUBGRAPH_URL, {
    method: "POST",
    body: JSON.stringify({ query: projectQuery, variables: { id } }),
  }).then((response) => response.json());
};

const renderApp = async () => {
  const app = document.querySelector<HTMLDivElement>("#app")!;

  try {
    const options = getOptions();
    const id = `${CONTRACTS_VERSION}-${options.projectId}`;

    const res = await fetchProject(id);
    if (!res.data?.project?.totalPaid) {
      throw new Error("Failed to fetch project.");
    }

    const paid = formatWad(parseInt(res.data?.project?.totalPaid));

    app.innerHTML = `
    <main>
      <div>
        <span style="font-family: sans-serif;">Ξ</span>${paid} raised
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
