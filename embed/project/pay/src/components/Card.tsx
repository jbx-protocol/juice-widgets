import { XCircleIcon } from "@heroicons/react/solid";
import { useProjectMetadataContent } from "juice-hooks";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useProjectMetadata } from "../hooks/useProjectMetadata";
import { Logo } from "./Logo";
import { PayForm } from "./PayForm";

export function Card() {
  const { options, root } = useContext(AppContext);

  const { data: projectMetadataCID } = useProjectMetadataContent({
    projectId: options?.projectId,
    domain: "0",
  });

  const { data: projectMetadata, isLoading } =
    useProjectMetadata(projectMetadataCID);

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md card-transition">
      <div className="pb-8 bg-zinc-50 shadow-xl rounded-sm relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-500"
          onClick={() => {
            const rootEl = document.getElementById("root");

            rootEl?.classList.remove("active");

            // TODO listen for transitionend instead probably
            setTimeout(() => {
              window.parent?.postMessage({ method: "close" }, "*");
              root?.unmount();
            }, 100);
          }}
        >
          <XCircleIcon className="w-5 h-5" />
        </button>
        <div className="text-center mb-5 bg-gray-100 w-full sm:px-10 pb-5 px-3">
          {projectMetadata?.logoUri && <Logo src={projectMetadata.logoUri} />}
          <h1 className="mt-4">
            {options?.title ?? (
              <>
                Pay{" "}
                <a
                  href={`https://juicebox.money/v2/p/${options?.projectId}`}
                  className="hover:text-cyan-700 underline"
                >
                  {projectMetadata?.name}
                </a>
              </>
            )}
          </h1>

          {options?.description && (
            <p className="mt-2 font-normal text-sm text-gray-600">
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
