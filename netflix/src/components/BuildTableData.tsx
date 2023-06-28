import { tdClassName } from "../util/data";
import { v1 as uuidv1 } from "uuid";

/**
 * Skeleton to build table rows and data cells
 */
export function BuildTableData({
  props,
}: {
  props: {
    span1: string;
    span2: string;
    span3: string;
    span4: string;
  };
}): JSX.Element {
  return (
    <tr key={uuidv1()}>
      <td className={tdClassName}>{props.span1}</td>
      <td className={tdClassName}>{props.span2}</td>
      <td className={tdClassName}>{props.span3}</td>
      <td className={tdClassName}>{props.span4}</td>
    </tr>
  );
}
