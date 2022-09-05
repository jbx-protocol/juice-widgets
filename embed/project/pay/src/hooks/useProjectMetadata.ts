import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const DEFAULT_PINATA_GATEWAY = "gateway.pinata.cloud";
const IPFS_GATEWAY_HOSTNAME = "jbx.mypinata.cloud";

const ipfsCidUrl = (
  hash: string,
  options: {
    useFallback?: boolean;
  } = { useFallback: false }
): string => {
  const { useFallback } = options;
  if (useFallback) {
    return `https://${DEFAULT_PINATA_GATEWAY}/ipfs/${hash}`;
  }
  return `https://${IPFS_GATEWAY_HOSTNAME}/ipfs/${hash}`;
};

const ipfsGetWithFallback = async (hash: string) => {
  try {
    const response = await axios.get(ipfsCidUrl(hash));
    return response;
  } catch (error) {
    console.info(`ipfs::falling back to public gateway for ${hash}`);
    const response = await axios.get(ipfsCidUrl(hash, { useFallback: true }));
    return response;
  }
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
