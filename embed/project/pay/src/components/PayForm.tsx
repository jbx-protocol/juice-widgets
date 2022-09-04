import { useContext, useState } from "react";
import { parseEther } from "@ethersproject/units";
import usePayProjectTx from "../hooks/usePayProjectTx";
import { AmountButton } from "./AmountButton";
import { Input } from "./Input";
import { TransactionButton } from "./TransactionButton";
import { AppContext } from "../contexts/AppContext";

const defaultAmounts = [0.01, 0.69, 1];

export function PayForm() {
  const { options } = useContext(AppContext);
  const [amount, setAmount] = useState<string>("0");
  const [hasClicked, setHasClicked] = useState<boolean>(false);

  const payProjectTx = usePayProjectTx();

  const onSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    if (!options?.projectId) {
      return;
    }

    if (!hasClicked) setHasClicked(true);

    await payProjectTx({
      projectId: options.projectId,
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
      <div className="flex justify-center">
        <TransactionButton>Pay now</TransactionButton>
      </div>
      <small className="font-normal text-center text-gray-500 block mt-3 text-xs">
        Powered by{" "}
        <a
          className="hover:text-cyan-700 underline"
          href="https://juicebox.money"
        >
          Juicebox
        </a>
      </small>
    </form>
  );
}
