/**
 * Create the box for our tabs
 * @param
 * @returns
 */
export function TabBar({
  tabLeft,
  tabMiddle,
  tabRight,
}: {
  tabLeft: JSX.Element[];
  tabMiddle: JSX.Element[];
  tabRight: JSX.Element[];
}): JSX.Element {
  return (
    <div className="items-baseline w-9/12 grid-cols-3 gap-8 mx-auto mt-8 text-center sm:flex ">
      {tabLeft}
      {tabMiddle}
      {tabRight}
    </div>
  );
}
