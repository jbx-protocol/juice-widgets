import { useState } from "react";
import { ContractReadHookResponse } from "../types";

type HookStateActions<T> = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<T | undefined>>;
  setError: React.Dispatch<React.SetStateAction<Error | undefined>>;
};

export default function useHookState<T>(
  defaultData?: T
): ContractReadHookResponse<T> & {
  actions: HookStateActions<T>;
} {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | undefined>(defaultData);
  const [error, setError] = useState<Error>();

  return { loading, data, error, actions: { setLoading, setData, setError } };
}
