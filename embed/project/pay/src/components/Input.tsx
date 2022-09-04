import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { ETH_SYMBOL } from "../constants/strings";

export function Input(props: React.HTMLProps<HTMLInputElement>) {
  const inputClass = `focus:ring-cyan-700 py-3 focus:border-cyan-500 block w-full pl-7 text-md border border-slate-500 rounded-sm bg-transparent text-black     ${
    props["aria-invalid"] ? "pr-16" : "pr-12"
  }`;

  return (
    <div>
      <label htmlFor="amount" className="sr-only">
        Amount
      </label>

      <div className="relative rounded-sm shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">
            {ETH_SYMBOL}
          </span>
        </div>

        <input
          {...props}
          type="number"
          name="amount"
          id="amount"
          className={inputClass}
          placeholder="0.00"
          step="0.01"
          aria-describedby="amount-currency"
        />
        {props["aria-invalid"] && (
          <div className="absolute inset-y-0 right-7 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-400"
              aria-hidden="true"
            />
          </div>
        )}

        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span
            className="text-gray-500 sm:text-sm font-thin"
            id="amount-currency"
          >
            ETH
          </span>
        </div>
      </div>

      {props["aria-invalid"] && (
        <p className="mt-1 text-xs font-normal text-red-400" id="amount-error">
          Enter a non-zero amount.
        </p>
      )}
    </div>
  );
}
