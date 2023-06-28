import { middleTabCenter, middleTabLeft, middleTabRight } from "../util/data";

/**
 * Template used so that functions can map out tabs
 * @returns {JSX.Element}
 */
export function TabBuilder(): {
  tabLeft: JSX.Element[];
  tabMiddle: JSX.Element[];
  tabRight: JSX.Element[];
} {
  /**
   * skeleton used for mapping out data to build tabs
   * @param
   * @returns
   */
  function buildTabs({ e, i }: { e: string | any; i: number }): JSX.Element {
    return (
      <div key={i}>
        <img className="w-full" src={e.src} alt={e.alt} />
        <p className="mx-0 mt-2 mb-6 text-xl font-bold">{e.pTop}</p>
        <p className="mx-0 my-2 text-gray-400">{e.pBottom}</p>
      </div>
    );
  }

  const tabLeft = middleTabLeft.map((e, i) => buildTabs({ e, i }));
  const tabMiddle = middleTabCenter.map((e, i) => buildTabs({ e, i }));
  const tabRight = middleTabRight.map((e, i) => buildTabs({ e, i }));

  return { tabLeft, tabMiddle, tabRight };
}
