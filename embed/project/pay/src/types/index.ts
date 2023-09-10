export type ContractReadHookResponse<T> = {
  data: T | undefined;
  loading: boolean;
  error: Error | undefined;
};
export type NetworkName = "goerli" | "mainnet";
export type ProjectId = number;
