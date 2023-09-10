import { useState } from "react";

export function Logo({ src }: { src: string }) {
  const [error, setError] = useState(false);
  return (
    <div className="inline-block h-14 w-14 -mt-7 rounded-md overflow-hidden bg-gray-300 shadow-sm border-white border">
      {!error ? (
        <img
          src={src}
          alt="Juicebox project logo"
          width="56"
          height="56"
          onError={() => setError(true)}
        />
      ) : (
        <div className="flex justify-center items-center h-full w-full text-xl">🧃</div>
      )}
    </div>
  );
}
