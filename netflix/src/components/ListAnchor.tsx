import { v1 as uuidv1 } from "uuid";

/**
 * create a list of anchors with links
 * @param
 * @returns
 */
export function ListAnchor({ props }: { props: any }): JSX.Element {
  const { e } = props;
  return (
    <li key={uuidv1()}>
      <a
        className="leading-10 hover:text-gray-400"
        href={e.href}
        rel="noreferrer"
        target="_blank"
      >
        {e.text}
      </a>
    </li>
  );
}
