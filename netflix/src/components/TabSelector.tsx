import { TabSelectorLeft } from "./TabSelectorLeft";
import { TabSelectorMiddle } from "./TabSelectorMiddle";
import { TabSelectorRight } from "./TabSelectorRight";

/**
 * Builds the element that is used to select tabs
 */
export function TabSelector(props: {
  borderBottom: string;
  onClickSetTab: any;
  pLeft: string;
  pMiddle: string;
  pRight: string;
}): JSX.Element {
  return (
    <section className="border-b-0 border-r-0 border-gray-600 bg-neutral-900">
      <div className="grid max-w-screen-sm grid-cols-3 px-1 pt-1 m-auto overflow-hidden text-center xl:max-w-screen-xl sm:pt-2">
        <TabSelectorLeft
          borderBottom={props.borderBottom}
          onClickSetTab={props.onClickSetTab}
          pLeft={props.pLeft}
        />
        <TabSelectorMiddle props={props} />
        <TabSelectorRight props={props} />
      </div>
    </section>
  );
}
