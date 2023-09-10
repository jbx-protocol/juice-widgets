import { XCircleIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { useContractRead } from "wagmi";
import { AppContext } from "../contexts/AppContext";
import { useProjectMetadata } from "../hooks/useProjectMetadata";
import { jbProjectsABI } from "../lib/juicebox/projectsAbi";
import { Logo } from "./Logo";
import { PayForm } from "./PayForm";

export function Card() {
  const { options, root } = useContext(AppContext);

  const { data: projectMetadataCID } = useContractRead({
    addressOrName:
      options?.networkName === "mainnet"
        ? "0xD8B4359143eda5B2d763E127Ed27c77addBc47d3"
        : "0x21263a042aFE4bAE34F08Bb318056C181bD96D3b",
    functionName: "metadataContentOf",
    args: [
      options?.projectId,
      0, // domain
    ],
    contractInterface: jbProjectsABI,
  });

  const { data: projectMetadata } = useProjectMetadata(
    projectMetadataCID as string | undefined
  );

  const subdomain = options?.networkName === "mainnet" ? "" : "goerli.";
  const avatarUrl = `https://${subdomain}juicebox.money/api/juicebox/pv/2/project/${options?.projectId}/logo`;

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md card-transition rounded-md">
      <div className="bg-zinc-50 shadow-xl rounded-md relative">
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
        <div className="text-center mb-5 bg-zinc-100 w-full sm:px-10 pb-5 px-3 rounded-t-md">
          {avatarUrl && <Logo src={avatarUrl} />}
          <h1 className="mt-4">
            {options?.title ?? (
              <>
                Pay{" "}
                <a
                  href={`https://juicebox.money/v2/p/${options?.projectId}`}
                  className="hover:text-blue-700 underline"
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
          {options?.projectId ? (
            <PayForm projectId={options.projectId} />
          ) : null}
        </div>

        <small className="font-normal text-center text-gray-500 block mt-5 text-xs py-4">
          Powered by{" "}
          <a
            className="hover:text-blue-700 underline"
            href="https://juicebox.money"
          >
            Juicebox
          </a>
        </small>
      </div>
    </div>
  );
}
