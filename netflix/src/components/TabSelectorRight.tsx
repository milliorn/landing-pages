import { FaTags } from "react-icons/fa";

/**
 * create the button for tab content right
 * @param
 * @returns
 */
export function TabSelectorRight({
  props,
}: {
  props: string | any;
}): JSX.Element {
  return (
    <div
      className={props.borderBottom}
      id="tab-3"
      onClick={props.onClickSetTab}
    >
      <FaTags className="inline pb-1 m-0 text-4xl sm:text-7xl hover:text-white" />
      <p className="text-xs sm:m-0 sm:block md:text-base">{props.pRight}</p>
    </div>
  );
}
