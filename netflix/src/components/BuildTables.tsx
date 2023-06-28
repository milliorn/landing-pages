import {
  tableRowEight,
  tableRowFive,
  tableRowFour,
  tableRowOne,
  tableRowSeven,
  tableRowSix,
  tableRowThree,
  tableRowTwo
} from "../util/data";
import { BuildTableData } from "./BuildTableData";

/**
 * map and build all tables derived from jsx.elements and return them
 */
export function BuildTables() {
  /**
   * skeleton used for mapping data for tables
   */
  const tableOne = tableRowOne.map((e) => BuildTableData({ props: e }));
  const tableTwo = tableRowTwo.map((e) => BuildTableData({ props: e }));
  const tableThree = tableRowThree.map((e) => BuildTableData({ props: e }));
  const tableFour = tableRowFour.map((e) => BuildTableData({ props: e }));
  const tableFive = tableRowFive.map((e) => BuildTableData({ props: e }));
  const tableSix = tableRowSix.map((e) => BuildTableData({ props: e }));
  const tableSeven = tableRowSeven.map((e) => BuildTableData({ props: e }));
  const tableEight = tableRowEight.map((e) => BuildTableData({ props: e }));

  return {
    tableOne,
    tableTwo,
    tableThree,
    tableFour,
    tableFive,
    tableSix,
    tableSeven,
    tableEight,
  };
}
