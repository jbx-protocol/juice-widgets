import "./style.css";

const V2_PATH_REGEX = /#\/v2\/p\/([0-9+])/;
const SUBGRAPH_URL =
  "https://api.thegraph.com/subgraphs/id/QmRoxhw8zQzsVpVj8Mf4hs5bYwTxTxyvZEpHPLZ6shVsXy";

const projectQuery = `query project($id: ID!) {
  project(id: $id) {
    totalPaid
  }
}
`;
const CONTRACTS_VERSION = "2";

const formatWad = (wad: number) => (wad / 1e18).toFixed(2);

const getOptions = () => {
  const projectId = window.location.hash.match(V2_PATH_REGEX)?.[1];
  if (!projectId) throw new Error();

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

    app.innerHTML = `${paid} ETH raised`;
  } catch (e) {
    console.error(e);
  }
};

renderApp();
