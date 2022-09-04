const V2_PATH_REGEX = /\/v2\/p\/([0-9+])/;

const formatWad = (wad) => (wad / 1e18).toFixed(2);
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

async function getBalance(projectId) {
  const terminals = await getJBDirectory(provider).terminalsOf(projectId);
  const primaryTerminal = terminals[0];

  const balance = await getJBSingleTokenPaymentTerminalStore(
    provider
  ).balanceOf(primaryTerminal, projectId);

  return balance.toString();
}

exports.handler = async function (event, context) {
  const balance = await getBalance(options.projectId);
  const balanceFormatted = formatWad(parseInt(balance));

  const svg = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="160"
    height="20"
    role="img"
    aria-label="Juicebox balance: Ξ${balanceFormatted}"
  >
    <title>Juicebox balance: Ξ${balanceFormatted}</title>
    <linearGradient id="s" x2="0" y2="100%">
      <stop offset="0" stop-color="#bbb" stop-opacity=".1" />
      <stop offset="1" stop-opacity=".1" />
    </linearGradient>
    <clipPath id="r">
      <rect width="160" height="20" rx="3" fill="#fff" />
    </clipPath>
    <g clip-path="url(#r)">
      <rect width="103" height="20" fill="#555" />
      <rect x="103" width="57" height="20" fill="#f5a312" />
      <rect width="160" height="20" fill="url(#s)" />
    </g>
    <g
      fill="#fff"
      text-anchor="middle"
      font-family="Verdana,Geneva,DejaVu Sans,sans-serif"
      text-rendering="geometricPrecision"
      font-size="110"
    >
      <text
        aria-hidden="true"
        x="525"
        y="150"
        fill="#010101"
        fill-opacity=".3"
        transform="scale(.1)"
        textLength="930"
      >
        Juicebox balance
      </text>
      <text x="525" y="140" transform="scale(.1)" fill="#fff" textLength="930">
        Juicebox balance
      </text>
      <text
        aria-hidden="true"
        x="1305"
        y="150"
        fill="#010101"
        fill-opacity=".3"
        transform="scale(.1)"
        textLength="470"
      >
        Ξ${balanceFormatted}
      </text>
      <text x="1305" y="140" transform="scale(.1)" fill="#fff" textLength="470">
        Ξ${balanceFormatted}
      </text>
    </g>
  </svg>;
`;

  // your server-side functionality
  return {
    statusCode: 200,
    body: svg,
  };
};
