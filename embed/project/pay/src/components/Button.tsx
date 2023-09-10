export function Button(
  props: Omit<React.HTMLProps<HTMLButtonElement>, "type">
) {
  const className =
    "w-full flex justify-center transition-all py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[#4864C8] hover:bg-[#5777EB] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600" +
    ` ${props.className}`;

  return <button {...props} type="submit" className={className}></button>;
}
