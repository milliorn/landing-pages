import { BuildTableHead } from "./BuildTableHead";

/**
 * create the table found in tab content right
 * @param
 * @returns
 */
export function TableBody({
  props,
  tableOne,
  tableTwo,
  tableThree,
  tableFour,
  tableFive,
  tableSix,
  tableSeven,
  tableEight,
}: {
  props: {
    th1: string;
    th2: string;
    th3: string;
  };
  tableOne: JSX.Element[];
  tableTwo: JSX.Element[];
  tableThree: JSX.Element[];
  tableFour: JSX.Element[];
  tableFive: JSX.Element[];
  tableSix: JSX.Element[];
  tableSeven: JSX.Element[];
  tableEight: JSX.Element[];
}): JSX.Element {
  return (
    <table className="table w-10/12 mx-auto mt-8">
      <BuildTableHead props={props} />
      <tbody className="align-middle border-inherit">
        {tableOne}
        {tableTwo}
        {tableThree}
        {tableFour}
        {tableFive}
        {tableSix}
        {tableSeven}
        {tableEight}
      </tbody>
    </table>
  );
}
