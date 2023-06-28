import { MouseEventHandler } from "react";
import { FaDoorOpen } from "react-icons/fa";

/**
 * create the button for tab content left
 */
export function TabSelectorLeft(props: {
  borderBottom: string;
  onClickSetTab: MouseEventHandler<HTMLDivElement>;
  pLeft: string;
}): JSX.Element {
  const { borderBottom, onClickSetTab, pLeft } = props;
  return (
    <div
      className={["tab-border ", borderBottom].join("")}
      id="tab-1"
      onClick={onClickSetTab}
    >
      <FaDoorOpen className="inline pb-1 m-0 text-4xl sm:text-7xl hover:text-white" />
      <p className="text-xs sm:m-0 sm:block md:text-base">{pLeft}</p>
    </div>
  );
}
