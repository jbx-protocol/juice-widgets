import { Logo } from "./Logo";
import { PayForm } from "./PayForm";
import { Root } from "react-dom/client";

export function Card({ options, root }: { options: any; root: Root }) {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md card-transition">
      <button
        className="text-gray-100"
        onClick={() => {
          const rootEl = document.getElementById("root");

          rootEl?.classList.remove("active");

          // TODO listen for transitionend instead probably
          setTimeout(() => {
            window.parent?.postMessage({ method: "close" }, "*");
            root.unmount();
          }, 100);
        }}
      >
        Close
      </button>
      <div className="pb-8 bg-zinc-50 shadow-xl rounded-sm">
        <div className="text-center mb-5 bg-gray-100 w-full sm:px-10 pb-5 px-3">
          <Logo src="https://jbx.mypinata.cloud/ipfs/QmVQqQuUUvXbLftLpcBmwX5dFvQc24UPvMcSvMqVJYHv3f" />
          <h1 className="mt-2">
            {options?.title ?? "Pay this Juicebox Project"}
          </h1>
          {options?.description && (
            <p className="mt-1 font-normal text-sm text-gray-600">
              {options.description}
            </p>
          )}
        </div>

        <div className="sm:px-10 px-3">
          <PayForm />
        </div>
      </div>
    </div>
  );
}
