import { ETH_SYMBOL } from "../constants/strings";

export function AmountButton({
  amount,
  onClick,
}: {
  amount: number;
  onClick: VoidFunction;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="mr-2 inline-flex items-center w-9 justify-center px-3 py-3 lg:py-1 font-normal text-sm rounded-sm text-gray-800 bg-gray-200 border border-transparent border-inset box-content focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-cyan-700"
    >
      {ETH_SYMBOL}
      {amount}
    </button>
  );
}
