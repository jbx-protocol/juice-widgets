import ReactDOM from "react-dom/client";
import { createContext } from "react";
import { NetworkName } from "../types";

export interface AppOptions {
  projectId: number;

  networkName: NetworkName;

  title: string;
  description: string;
  avatarUrl: string;

  payButtonText: string;

  triggerButtonText: string;
  triggerButtonClass: string;
  triggerButtonStyle: string;
  triggerButtonSelector: string;

  projectVersion: "2" | undefined;
}

interface AppContextData {
  options?: AppOptions;
  root?: ReactDOM.Root;
}

export const AppContext: React.Context<AppContextData> = createContext({});
