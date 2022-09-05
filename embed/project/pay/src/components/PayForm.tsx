import { useContext, useState } from "react";
import { parseEther } from "@ethersproject/units";
import { AmountButton } from "./AmountButton";
import { Input } from "./Input";
import { TransactionButton } from "./TransactionButton";
import { AppContext } from "../contexts/AppContext";
import { usePreparePayETHPaymentTerminal } from "juice-hooks";
import { useAccount } from "wagmi";

const defaultAmounts = [0.01, 0.69, 1];

export function PayForm() {
  const { options } = useContext(AppContext);
  const { address } = useAccount();
  const [amount, setAmount] = useState<string>("0");
  const [hasClicked, setHasClicked] = useState<boolean>(false);

  const payETHPaymentTerminalTx = usePreparePayETHPaymentTerminal();

  const onSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    if (!options?.projectId || !payETHPaymentTerminalTx) {
      return;
    }

    if (!hasClicked) setHasClicked(true);

    await payETHPaymentTerminalTx({
      projectId: options.projectId,
      value: parseEther(amount.toString()),
      beneficiary: address,
      memo: `Paid on ${document.referrer}`,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-7">
        <div className="mb-2">
          {defaultAmounts.map((amount) => (
            <AmountButton
              amount={amount}
              onClick={() => setAmount(amount.toString())}
              key={amount}
            />
          ))}
        </div>
        <div>
          <Input
            value={amount}
            onChange={(e) => {
              const targetValue = (e.target as HTMLInputElement).value;
              setAmount(targetValue);
            }}
            aria-invalid={amount === "0" && hasClicked}
          />
        </div>

        {/* <span className="text-xs font-light text-gray-500">
          Receive 1,000,000 tokens
        </span> */}
      </div>
      <div className="flex justify-center">
        <TransactionButton>Pay now</TransactionButton>
      </div>
    </form>
  );
}
