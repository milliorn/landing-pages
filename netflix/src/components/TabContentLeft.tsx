import { InnerTabContentLeft } from "./InnerTabContentLeft";
import { InnerTabContentLeftImage } from "./InnerTabContentLeftImage";

/**
 * Build element when the left tab is clicked
 * @param {object} props
 * @returns {JSX.Element}
 */
export function TabContentLeft(props: {
  paragraph: string;
  href: string;
  rel: string;
  target: string;
  span: string;
  alt: string;
  srcImg: string;
}): JSX.Element {
  return (
    <div id="tab-1-content" className="w-11/12 mx-auto opacity-0 show">
      <div className="items-center justify-center gap-8 text-center tab-1-content-inner sm:text-left md:flex">
        <InnerTabContentLeft props={props} />
        <InnerTabContentLeftImage props={props} />
      </div>
    </div>
  );
}
