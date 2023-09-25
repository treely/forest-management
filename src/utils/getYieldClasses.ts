import YieldTable, { YieldTableRow } from '../models/YieldTable';

const findLast = (arr: YieldTableRow[], fn: (yieldTableEntry: any) => boolean) =>
  arr.filter(fn).pop();

const getYieldClasses = (
  yieldTable: YieldTable,
  siteProductivity: number
): [number, number] | [number] => {
  const exactMatchYieldClass = yieldTable.rows.find(
    (yieldTableEntry) => yieldTableEntry.yieldClass === siteProductivity
  );

  // 1st case where the yield class exactly matches a age level
  if (exactMatchYieldClass) {
    return [siteProductivity];
  }

  const yieldTableRowsSortedByYieldClass = yieldTable.rows.sort(
    (yieldTableRowA: YieldTableRow, yieldTableRowB: YieldTableRow) =>
      yieldTableRowA.yieldClass - yieldTableRowB.yieldClass
  );

  // 2nd case where the yield class is between two age levels
  const lowerYieldClass = findLast(
    yieldTableRowsSortedByYieldClass,
    (yieldTableEntry) => yieldTableEntry.yieldClass < siteProductivity
  );
  const upperYieldClass = yieldTableRowsSortedByYieldClass.find(
    (yieldTableEntry) => yieldTableEntry.yieldClass > siteProductivity
  );

  if (!lowerYieldClass) {
    throw new Error(
      `The yield class is lower than the lowest yield class on the yield board. Site productivity: ${siteProductivity}`
    );
  }
  if (!upperYieldClass) {
    throw new Error(
      `The yield class is higher than the highest yield class on the yield board. Site productivity: ${siteProductivity}`
    );
  }

  return [lowerYieldClass.yieldClass, upperYieldClass.yieldClass];
};

export default getYieldClasses;
