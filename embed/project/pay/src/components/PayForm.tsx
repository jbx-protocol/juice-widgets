import { parseEther } from "@ethersproject/units";
import { CheckCircleIcon, LinkIcon } from "@heroicons/react/solid";
import { BigNumber } from "ethers";
import { useContext, useState } from "react";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { AppContext } from "../contexts/AppContext";
import { jbDirectoryABI } from "../lib/juicebox/directoryAbi";
import { jbethPaymentTerminalABI } from "../lib/juicebox/ethTerminalAbi";
import { AmountButton } from "./AmountButton";
import { Input } from "./Input";
import { TransactionButton } from "./TransactionButton";

const ETHER_ADDRESS = "0x000000000000000000000000000000000000eeee";
const defaultAmounts = [0.01, 0.69, 1];

export function PayForm({ projectId }: { projectId: number }) {
  const [amount, setAmount] = useState<string>("");
  const [didSubmitForm, setDidSubmitForm] = useState<boolean>(false);

  const network = useNetwork();
  const { options } = useContext(AppContext);
  const { address } = useAccount();

  const amountWei = amount ? parseEther(amount.toString()) : BigNumber.from(0);

  const { data: primaryTerminal } = useContractRead({
    addressOrName:
      network.chain?.id === 1
        ? "0x65572FB928b46f9aDB7cfe5A4c41226F636161ea" // mainnet,
        : "0x8E05bcD2812E1449f0EC3aE24E2C395F533d9A99", // goerli
    functionName: "primaryTerminalOf",
    contractInterface: jbDirectoryABI,
    args: [projectId, ETHER_ADDRESS],
  });

  const { config } = usePrepareContractWrite({
    addressOrName: (primaryTerminal as string | undefined) ?? "",
    functionName: "pay",
    contractInterface: jbethPaymentTerminalABI,
    args: [
      projectId,
      amountWei,
      ETHER_ADDRESS,
      address,
      0,
      true,
      `Paid on ${document.referrer}`,
      0,
    ],
    overrides: {
      value: amountWei,
    },
  });

  const { write, data } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const onSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    if (!options?.projectId) {
      return;
    }

    if (!didSubmitForm) setDidSubmitForm(true);

    await write?.();
  };

  if (isLoading) {
    return (
      <div className="text-center flex flex-col gap-3">
        <h3 className="text-xl font-medium">Transaction pending...</h3>
        <p>Your transaction has been submitted and is awaiting confirmation.</p>
        {data?.hash ? (
          <a
            className="underline text-xs text-gray-500 hover:text-gray-600"
            href={`https://etherscan.io/tx/${data.hash}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkIcon className="w-4 h-4 inline-block mr-1" />
            View on Etherscan
          </a>
        ) : null}
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="text-center flex flex-col gap-3">
        <CheckCircleIcon className="w-12 h-12 text-green-500 mx-auto" />
        <h3 className="text-xl font-medium">Success!</h3>
        <p>
          Thank you, your payment has been successful. You can close this
          window.
        </p>
        <a
          href={`https://juicebox.money/v2/p/${options?.projectId}`}
          rel="noopener noreferrer"
          className="underline text-xs text-gray-500 hover:text-gray-600"
          target="_blank"
        >
          <LinkIcon className="w-4 h-4 inline-block mr-1" />
          Go to Juicebox project
        </a>
      </div>
    );
  }

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
            aria-invalid={amount === "0" && didSubmitForm}
          />
        </div>

        {/* <span className="text-xs font-light text-gray-500">
          Receive 1,000,000 tokens
        </span> */}
      </div>
      <div className="flex justify-center">
        <TransactionButton>
          {options?.payButtonText ?? "Pay now"}
        </TransactionButton>
      </div>
    </form>
  );
}
