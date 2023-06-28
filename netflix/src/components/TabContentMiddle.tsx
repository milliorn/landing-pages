import { TabBar } from "./TabBar";
import { TabBuilder } from "./TabBuilder";
import { TabMiddleButton } from "./TabMiddleButton";

/**
 * Element that builds the middle tab when selected
 * @param {object} props
 * @returns {JSX.Element}
 */
export function TabContentMiddle(props: {
  anchorText: string;
  href: string;
  p: string;
  rel: string;
  target: string;
}): JSX.Element {
  const { tabLeft, tabMiddle, tabRight } = TabBuilder();

  return (
    <div id="tab-2-content" className="text-center">
      <div className="justify-center gap-4 sm:flex-grid sm:items-start tab-2-content-top sm:flex">
        <p className="mx-0 mt-2 mb-4 text-xl leading-none sm:text-2xl">
          {props.p}
        </p>
        <TabMiddleButton props={props} />
      </div>
      <TabBar tabLeft={tabLeft} tabMiddle={tabMiddle} tabRight={tabRight} />
    </div>
  );
}
