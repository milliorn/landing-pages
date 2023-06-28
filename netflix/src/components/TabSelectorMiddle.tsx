import { FaTabletAlt } from "react-icons/fa";

/**
 * create the button for tab content middle
 * @param
 * @returns
 */
export function TabSelectorMiddle({
  props,
}: {
  props: string | any;
}): JSX.Element {
  return (
    <div
      className={props.borderBottom}
      id="tab-2"
      onClick={props.onClickSetTab}
    >
      <FaTabletAlt className="inline pb-1 m-0 text-4xl sm:text-7xl hover:text-white" />
      <p className="text-xs sm:m-0 sm:block md:text-base">{props.pMiddle}</p>
    </div>
  );
}
