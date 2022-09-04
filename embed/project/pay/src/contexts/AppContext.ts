import ReactDOM from "react-dom/client";
import { createContext } from "react";

export interface AppOptions {
  title: string;
  description: string;
  projectId: number;
}

interface AppContextData {
  options?: AppOptions;
  root?: ReactDOM.Root;
}

export const AppContext: React.Context<AppContextData> = createContext({});
