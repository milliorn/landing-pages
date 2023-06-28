import { TabSelectorMiddle } from "./TabSelectorMiddle";

/**
 * creates the right content table heading
 * @param param0
 * @returns
 */
export function TableHeading({
  props,
}: {
  props: {
    p: string;
    href: string | undefined;
    rel: string | undefined;
    target: string | undefined;
    span: string;
    th1: string;
    th2: string;
    th3: string;
  };
}): JSX.Element {
  return (
    <div className="text-center">
      <p className="w-10/12 mx-auto mt-2 mb-4 text-xl sm:text-2xl">{props.p}</p>
      <TabSelectorMiddle props={props} />
    </div>
  );
}
