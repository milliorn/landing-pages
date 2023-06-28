import { ReactElement, JSXElementConstructor } from "react";

/**
 * Builds the element that will house the content selected
 * @returns {JSX.Element}
 */
export function TabContentCurrent(props: {
  tabContent: ReactElement<
    JSXElementConstructor<any>,
    string | JSXElementConstructor<any>
  >;
}): JSX.Element {
  return (
    <section className="px-0 py-12 text-white bg-black">
      <div className="max-w-full grid-cols-3 px-8 py-0 m-auto overflow-hidden ">
        {props.tabContent}
      </div>
    </section>
  );
}
