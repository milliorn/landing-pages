import { BuildTables } from "./BuildTables";
import { TableBody } from "./TableBody";
import { TableHeading } from "./TableHeading";

/**
 * Build element when the right tab is clicked
 * @param props
 * @returns
 */
export function TabContentRight(props: {
  p: string;
  href: string | undefined;
  rel: string | undefined;
  target: string;
  span: string;
  th1: string;
  th2: string;
  th3: string;
}): JSX.Element {
  const {
    tableOne,
    tableTwo,
    tableThree,
    tableFour,
    tableFive,
    tableSix,
    tableSeven,
    tableEight,
  } = BuildTables();

  return (
    <div id="tab-3-content" className="overflow-visible overflow-x-auto ">
      <TableHeading props={props} />
      <TableBody
        props={props}
        tableOne={tableOne}
        tableTwo={tableTwo}
        tableThree={tableThree}
        tableFour={tableFour}
        tableFive={tableFive}
        tableSix={tableSix}
        tableSeven={tableSeven}
        tableEight={tableEight}
      />
    </div>
  );
}
