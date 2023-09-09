export function Logo({ src }: { src: string }) {
  return (
    <img
      className="inline-block h-14 w-14 -mt-7 rounded-md"
      src={src}
      alt="Juicebox project logo"
      width="56"
      height="56"
    />
  );
}
