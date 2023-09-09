import { useQuery } from "@tanstack/react-query";

const IPFS_GATEWAY_HOSTNAME = "jbm.infura-ipfs.io";

const ipfsCidUrl = (hash: string): string => {
  return `https://${IPFS_GATEWAY_HOSTNAME}/ipfs/${hash}`;
};

const ipfsGetWithFallback = async (hash: string) => {
  const response = await fetch(ipfsCidUrl(hash)).then((res) => res.json());
  return response;
};

export function useProjectMetadata(uri: string | undefined) {
  return useQuery(
    ["project-metadata", uri],
    async () => {
      if (!uri) {
        throw new Error("Project URI not specified.");
      }

      const response = await ipfsGetWithFallback(uri);
      return response.data;
    },
    {
      enabled: !!uri,
    }
  );
}
