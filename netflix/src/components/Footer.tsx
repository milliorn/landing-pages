import {
  footerLeft,
  footerLeftCenter,
  footerRight,
  footerRightCenter,
} from "../util/data";
import { ListAnchor } from "./ListAnchor";

/**
 * create main page footer
 */
export function Footer(props: { footerParagraph: string }) {
  return (
    <footer className="mx-auto overflow-auto text-left bg-black footer ">
      <p className="mt-2 mb-6 text-sm hover:text-white sm:text-base">
        {props.footerParagraph}
      </p>
      <div className="grid grid-cols-2 gap-2 mb-8 text-sm sm:grid-cols-4 sm:mb-16">
        <ul className="list-none">
          {footerLeft.map((e) => ListAnchor({ props: { e } }))}
        </ul>
        <ul className="list-none">
          {footerLeftCenter.map((e) => ListAnchor({ props: { e } }))}
        </ul>
        <ul className="list-none">
          {footerRight.map((e) => ListAnchor({ props: { e } }))}
        </ul>
        <ul className="list-none">
          {footerRightCenter.map((e) => ListAnchor({ props: { e } }))}
        </ul>
      </div>
    </footer>
  );
}
