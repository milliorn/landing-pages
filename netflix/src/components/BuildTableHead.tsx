/**
 * builds the table head for table body
 * @param param0
 * @returns
 */
export function BuildTableHead({
  props,
}: {
  props: { th1: string; th2: string; th3: string };
}): JSX.Element {
  return (
    <thead>
      <tr className="uppercase">
        <th className="p-3.5" />
        <th className="p-3.5">{props.th1}</th>
        <th className="p-3.5">{props.th2}</th>
        <th className="p-3.5">{props.th3}</th>
      </tr>
    </thead>
  );
}
