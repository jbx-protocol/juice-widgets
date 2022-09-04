import { Logo } from "./Logo";
import { PayForm } from "./PayForm";

export function Card({ options }: { options?: any }) {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <button
        className="text-gray-100"
        onClick={() => {
          window.parent?.postMessage({ method: "close" }, "*");
          document.getElementById("juicebox-pay")?.classList.remove("active");
        }}
      >
        Close
      </button>
      <div className="pb-8 bg-zinc-50 shadow-xl rounded-sm">
        <div className="text-center mb-5 bg-gray-100 w-full sm:px-10 pb-5">
          <Logo src="https://jbx.mypinata.cloud/ipfs/QmVQqQuUUvXbLftLpcBmwX5dFvQc24UPvMcSvMqVJYHv3f" />
          <h1 className="mt-2">
            {options?.title ?? "Pay this Juicebox Project"}
          </h1>
          {options?.description && (
            <p className="mt-1 font-normal text-sm text-gray-600">{options.description}</p>
          )}
        </div>

        <div className="sm:px-10">
          <PayForm />
        </div>
      </div>
    </div>
  );
}
