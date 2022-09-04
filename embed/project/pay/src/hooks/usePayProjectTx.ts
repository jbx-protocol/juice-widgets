import { ContractTransaction } from "@ethersproject/contracts";
import { BigNumber } from "@ethersproject/bignumber";
import { getTerminalV1_1 as getTerminalV1_1Contract } from "juice-sdk-v1";
import { ContractReadHookResponse, ProjectId } from "../types";

import useHookState from "./useHookState";
import { useAccount, useSigner } from "wagmi";

type DataType = ContractTransaction;

interface Args {
  projectId: ProjectId;
  valueWad: BigNumber;
}

export default function usePayProjectTx(): (
  args: Args
) => ContractReadHookResponse<DataType> {
  const { data: signer } = useSigner();
  const { address: connectedWalletAddress } = useAccount();
  const {
    loading,
    data,
    error,
    actions: { setError, setData, setLoading },
  } = useHookState<DataType>();

  return ({ projectId, valueWad }: Args) => {
    if (!signer || !connectedWalletAddress)
      return { loading, data, error: new Error("No connected wallet.") };

    setLoading(true);
    console.log(connectedWalletAddress);

    console.info("📗 Calling `pay` with args", [
      projectId,
      connectedWalletAddress,
      "",
      false,
      { value: valueWad.toString() },
    ]);

    getTerminalV1_1Contract(signer)
      .pay(projectId, connectedWalletAddress, "", false, { value: valueWad })
      .then((res) => {
        setData(res);
      })
      .catch((e) => {
        console.error(e);

        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });

    return { loading, data, error };
  };
}
