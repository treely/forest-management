import { useContext, useMemo } from 'react';
import getAreaInPercent from '../../utils/getAreaInPercent';
import FeasibilityStudyConfig from '../../models/FeasibilityStudyConfig';
import getNormalStock from '../../utils/getNormalStock';
import yieldTables from '../../constants/yieldTables';
import { IntlContext } from '../ForestManagementProvider';
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, Tfoot } from 'boemly';
import { TableWrapper } from '../TableWrapper';

export interface ForestryProps {
  config: FeasibilityStudyConfig;
}

export const Forestry = ({ config }: ForestryProps): JSX.Element => {
  const { formatNumber, formatMessage } = useContext(IntlContext);

  const operationClassWithAreaInPercent = useMemo(
    () => getAreaInPercent(config.operationClasses),
    [config.operationClasses]
  );

  const totalAreaInPercent = useMemo(
    () => operationClassWithAreaInPercent.reduce((acc, unit) => acc + unit.areaInPercent, 0),
    [operationClassWithAreaInPercent]
  );

  const normalStocksPerOperationClass = useMemo(
    () =>
      config.operationClasses.map((operationClass) => {
        const normalStocksPerSpecies = operationClass.listOfSpecies.map((species) =>
          getNormalStock(
            yieldTables[species.yieldTable],
            species.siteProductivity,
            operationClass.rotationPeriod
          )
        );
        const areaInPercentPerSpecies = getAreaInPercent(operationClass.listOfSpecies);

        return normalStocksPerSpecies.reduce(
          (acc, normalStock, index) =>
            acc + normalStock * areaInPercentPerSpecies[index].areaInPercent,
          0
        );
      }),
    [config.operationClasses]
  );

  // This is not the sum of all normal stocks, but the sum of all normal stocks weighted by the area in percent.
  const totalNormalStock = useMemo(
    () =>
      operationClassWithAreaInPercent.reduce(
        (acc, unitWithAreaInPercent, index) =>
          acc + normalStocksPerOperationClass[index] * unitWithAreaInPercent.areaInPercent,
        0
      ),
    [normalStocksPerOperationClass, operationClassWithAreaInPercent]
  );

  const totalAreaInHectare = useMemo(
    () =>
      config.operationClasses.reduce(
        (acc, operationClass) => acc + operationClass.areaInHectare,
        0
      ),
    [config.operationClasses]
  );

  return (
    <TableWrapper>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>{formatMessage({ id: 'components.forestry.operationClass' })}</Th>
              <Th>{formatMessage({ id: 'components.forestry.area' })}</Th>
              <Th>{formatMessage({ id: 'components.forestry.areaDistribution' })}</Th>
              <Th>{formatMessage({ id: 'components.forestry.normalStock' })}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {config.operationClasses
              .sort((operationClassA, operationClassB) =>
                operationClassA.name.localeCompare(operationClassB.name)
              )
              .map((operationClass, index) => (
                <Tr key={index}>
                  <Td>{operationClass.name}</Td>
                  <Td align="right">
                    {formatMessage(
                      {
                        id: 'units.ha',
                      },
                      {
                        value: formatNumber(operationClass.areaInHectare, {
                          minimumFractionDigits: 1,
                          maximumFractionDigits: 1,
                        }),
                      }
                    )}
                  </Td>
                  <Td align="right">
                    {formatNumber(operationClassWithAreaInPercent[index].areaInPercent, {
                      style: 'percent',
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    })}
                  </Td>
                  <Td align="right">
                    {formatMessage(
                      { id: 'units.vfmPerHa' },
                      {
                        value: formatNumber(normalStocksPerOperationClass[index], {
                          minimumFractionDigits: 1,
                          maximumFractionDigits: 1,
                        }),
                      }
                    )}
                  </Td>
                </Tr>
              ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th />
              <Th>
                {formatMessage(
                  { id: 'units.ha' },
                  {
                    value: formatNumber(totalAreaInHectare, {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    }),
                  }
                )}
              </Th>
              <Th align="right">
                {formatNumber(totalAreaInPercent, {
                  style: 'percent',
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                })}
              </Th>
              <Th align="right">
                {formatMessage(
                  { id: 'units.vfmPerHa' },
                  {
                    value: formatNumber(totalNormalStock, {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    }),
                  }
                )}
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};
