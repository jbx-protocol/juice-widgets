export function Button(
  props: Omit<React.HTMLProps<HTMLButtonElement>, "type">
) {
  const className =
    "w-full flex justify-center py-3 px-4 border border-transparent rounded-sm shadow-sm text-lg font-medium text-white bg-cyan-600 hover:bg-cyan-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600" +
    ` ${props.className}`;

  return <button {...props} type="submit" className={className}></button>;
}
