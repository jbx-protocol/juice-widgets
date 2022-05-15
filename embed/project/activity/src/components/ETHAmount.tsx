import { BigNumber } from "@ethersproject/bignumber";
import { formatEther } from "@ethersproject/units";

import ETHSymbol from "./ETHSymbol";

export default function ETHAmount({
  amountWei,
}: {
  amountWei?: BigNumber | string;
}) {
  if (!amountWei) return null;

  return (
    <span>
      <ETHSymbol />
      {formatEther(amountWei)}
    </span>
  );
}
