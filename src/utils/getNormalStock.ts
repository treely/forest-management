import YieldTable, { YieldTableRow } from '@/models/YieldTable';
import getYieldClasses from './getYieldClasses';

const getNormalStock = (
  yieldTable: YieldTable,
  siteProductivity: number,
  rotationPeriod: number
): number => {
  // Check if the given rotation period is a valid age level in the given yield table
  if (
    !yieldTable.rows.some((yieldTableRow: YieldTableRow) => yieldTableRow.age === rotationPeriod)
  ) {
    throw new Error(
      `No age level found in given yield table for the given rotation period ${rotationPeriod}`
    );
  }

  // Get the yield classes via the `getYieldClasses` util (The util returns one or two yield classes)
  const yieldClasses: number[] = getYieldClasses(yieldTable, siteProductivity);

  // Define the age gap
  const ageGap: number = 10; // TODO: get dynamically from yield table via a new forest util

  // Get the yield table rows for the relevant yield classes and relevant age levels
  const yieldTableRowsForRelevantYieldClassesAndAgeLevels: YieldTableRow[][] = yieldClasses.map(
    (yieldClass) =>
      yieldTable.rows.filter(
        (yieldTableRow: YieldTableRow) =>
          yieldTableRow.yieldClass === yieldClass && yieldTableRow.age <= rotationPeriod
      )
  );

  // Calculate the normal stock per yield class
  const normalStockPerAgeLevel: number[] = yieldTableRowsForRelevantYieldClassesAndAgeLevels.map(
    (yieldTableRows) => {
      const sumOfStocks = yieldTableRows.reduce((acc, { stock }, currentIndex) => {
        if (currentIndex === yieldTableRows.length - 1) {
          return acc + stock / 2;
        }
        return acc + stock;
      }, 0);

      return (ageGap / rotationPeriod) * sumOfStocks;
    }
  );

  if (yieldClasses.length === 1) {
    return normalStockPerAgeLevel[0];
  }

  // Interpolate the two neighboring yield classes with the given yield class
  return (
    (normalStockPerAgeLevel[1] - normalStockPerAgeLevel[0]) *
      ((siteProductivity - yieldClasses[0]) / (yieldClasses[1] - yieldClasses[0])) +
    normalStockPerAgeLevel[0]
  );
};

export default getNormalStock;
