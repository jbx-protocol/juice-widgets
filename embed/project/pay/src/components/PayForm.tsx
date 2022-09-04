import { useState } from "react";
import { parseEther } from "@ethersproject/units";
import usePayProjectTx from "../hooks/usePayProjectTx";
import { AmountButton } from "./AmountButton";
import { Input } from "./Input";
import { PEEL_PROJECT_ID } from "../constants/juicebox";
import { TransactionButton } from "./TransactionButton";

const defaultAmounts = [0.01, 0.69, 1];

export function PayForm() {
  const [amount, setAmount] = useState<string>("0");
  const [hasClicked, setHasClicked] = useState<boolean>(false);

  const payProjectTx = usePayProjectTx();

  const onSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();

    if (!hasClicked) setHasClicked(true);

    await payProjectTx({
      projectId: PEEL_PROJECT_ID,
      valueWad: parseEther(amount.toString()),
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

      <TransactionButton>Pay now</TransactionButton>
      <small className="font-normal text-center text-gray-500 block mt-2 text-xs">
        Powered by <a className="hover:text-cyan-700 underline" href="https://juicebox.money">Juicebox</a>
      </small>
    </form>
  );
}