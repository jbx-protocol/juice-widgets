import { Logo } from "./Logo";
import { PayForm } from "./PayForm";

export function Card() {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <div className="py-8 px-4 bg-zinc-50 shadow-xl rounded-sm sm:px-10">
        <div className="text-center mb-5">
          <Logo src="https://jbx.mypinata.cloud/ipfs/QmVQqQuUUvXbLftLpcBmwX5dFvQc24UPvMcSvMqVJYHv3f" />
        </div>

        <PayForm />
      </div>
    </div>
  );
}
