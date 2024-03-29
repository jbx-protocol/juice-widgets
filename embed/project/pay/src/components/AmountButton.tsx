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
      className="mr-2 inline-flex items-center w-9 justify-center px-2 py-2 md:py-1 font-normal text-sm rounded-md text-gray-800 bg-gray-200 border border-transparent border-inset box-content focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-600"
    >
      {ETH_SYMBOL}
      {amount}
    </button>
  );
}
