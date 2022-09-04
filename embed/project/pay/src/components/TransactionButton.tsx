import { Button } from "./Button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export function TransactionButton(
  props: Omit<React.HTMLProps<HTMLButtonElement>, "type">
) {
  const { address } = useAccount();
  // console.log("here", connectedWalletAddress);
  if (!address) {
    return <ConnectButton />;
  }

  return <Button {...props} />;
}
