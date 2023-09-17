import React from 'react';
import { BoemlyAlert, Spacer } from 'boemly';
import { useEffect, useMemo, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import FeasibilityStudyConfig from '@/models/FeasibilityStudyConfig';

const VFM_TO_EFM_FACTOR = 0.75;

export interface CalculateCurrentStockProps {
  config: FeasibilityStudyConfig;
}

export const CalculateCurrentStock = ({ config }: CalculateCurrentStockProps): JSX.Element => {
  const { formatNumber } = useIntl();
  const [allRequiredHarvestingAmounts, setAllRequiredHarvestingAmounts] = useState<boolean>(true);

  const totalAreaInHectare = useMemo(
    () =>
      config.operationClasses.reduce(
        (acc, operationClass) => acc + operationClass.areaInHectare,
        0
      ),
    [config.operationClasses]
  );

  const averageHarvestingAmountPerYearPerHectare =
    useMemo(
      () =>
        config.harvestingAmounts &&
        config.harvestingAmounts.length > 0 &&
        config.harvestingAmounts?.reduce(
          (acc, harvestingAmount) =>
            acc + harvestingAmount.coniferousWood + harvestingAmount.deciduousWood,
          0
        ) /
          config.harvestingAmounts.length /
          VFM_TO_EFM_FACTOR /
          totalAreaInHectare,
      [config.harvestingAmounts, totalAreaInHectare]
    ) || 0;

  useEffect(() => {
    if (config.harvestingAmounts && config.harvestingAmounts.length > 0) {
      for (let year = config.stockAtPointOfTime.year; year < config.currentYear; year++) {
        if (!config.harvestingAmounts.some((harvestingAmount) => harvestingAmount.year === year)) {
          setAllRequiredHarvestingAmounts(false);
        }
      }
    }
  }, [config.harvestingAmounts, config.stockAtPointOfTime.year, config.currentYear]);

  const numberOfYears = useMemo(
    () => config.currentYear - config.stockAtPointOfTime.year,
    [config.currentYear, config.stockAtPointOfTime]
  );

  const currentStock = useMemo(
    () =>
      config.stockAtPointOfTime.stock -
      numberOfYears * averageHarvestingAmountPerYearPerHectare +
      numberOfYears * config.yearlyIncrement,
    [
      config.stockAtPointOfTime,
      numberOfYears,
      averageHarvestingAmountPerYearPerHectare,
      config.yearlyIncrement,
    ]
  );

  if (config.stockAtPointOfTime.year > config.currentYear) {
    return (
      <BoemlyAlert
        text={<FormattedMessage id="components.calculateCurrentStock.invalidYears" />}
        status="error"
      />
    );
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th align="left">
              <FormattedMessage id="components.calculateCurrentStock.yearlyIncrement" />
            </th>
            <td align="right">
              <FormattedMessage
                id="units.vfmPerHaYear"
                values={{
                  value: formatNumber(config.yearlyIncrement, {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                  }),
                }}
              />
            </td>
          </tr>
          <tr>
            <th align="left">
              <FormattedMessage id="components.calculateCurrentStock.averageYearlyHarvestingAmount" />
            </th>
            <td align="right">
              <FormattedMessage
                id="units.vfmPerHaYear"
                values={{
                  value:
                    averageHarvestingAmountPerYearPerHectare !== 0
                      ? formatNumber(averageHarvestingAmountPerYearPerHectare, {
                          minimumFractionDigits: 1,
                          maximumFractionDigits: 1,
                        })
                      : 'n.a.',
                }}
              />
            </td>
          </tr>
          <tr>
            <th align="left">
              <FormattedMessage id="components.calculateCurrentStock.stockInTheYearOfInventory" />
            </th>
            <td align="right">
              <FormattedMessage
                id="units.vfmPerHa"
                values={{
                  value: formatNumber(config.stockAtPointOfTime.stock, {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                  }),
                }}
              />
            </td>
          </tr>
          <tr>
            <th align="left">
              <FormattedMessage id="components.calculateCurrentStock.currentStock" />
            </th>
            <td align="right">
              <FormattedMessage
                id="units.vfmPerHa"
                values={{
                  value: formatNumber(currentStock, {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                  }),
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>

      {!allRequiredHarvestingAmounts && (
        <>
          <BoemlyAlert
            text={
              <FormattedMessage
                id="components.calculateCurrentStock.warningDataMissing"
                values={{ from: config.stockAtPointOfTime.year, to: config.currentYear }}
              />
            }
            status="warning"
          />
          <Spacer height="4" />
        </>
      )}
    </>
  );
};
