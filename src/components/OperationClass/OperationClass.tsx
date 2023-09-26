import { useContext, useMemo } from 'react';
import Link from 'next/link';
import yieldTables from '../../constants/yieldTables';
import AreaInHectare from '../../models/AreaInHectare';
import AreaInPercent from '../../models/AreaInPercent';
import YieldTableEnum from '../../models/YieldTableEnum';
import getAreaInPercent from '../../utils/getAreaInPercent';
import getNormalStock from '../../utils/getNormalStock';
import { IntlContext } from '../ForestManagementProvider';
import { ForestDocsContext } from '../ForestManagementProvider/ForestManagementProvider';

interface Species {
  /** Free text title of the species */
  title: string;
  /** Site productivity (Bonität) of the species */
  siteProductivity: number;
  /** Yield table (Ertragstafel) to use for the species */
  yieldTable: YieldTableEnum;
}

interface SpeciesWithPercentageArea extends Species, AreaInPercent {}

interface SpeciesWithAreaInHectare extends Species, AreaInHectare {}

export interface OperationClassProps {
  rotationPeriod: number;
  listOfSpecies: SpeciesWithPercentageArea[] | SpeciesWithAreaInHectare[];
}

export const OperationClass: React.FC<OperationClassProps> = ({
  rotationPeriod,
  listOfSpecies,
}: OperationClassProps) => {
  const { formatNumber, formatMessage } = useContext(IntlContext);
  const forestDocsBaseUrl = useContext(ForestDocsContext);

  const areasInPercentPerSpecies = useMemo(() => getAreaInPercent(listOfSpecies), [listOfSpecies]);

  const normalStocks = useMemo(
    () =>
      listOfSpecies.map((species) =>
        getNormalStock(yieldTables[species.yieldTable], species.siteProductivity, rotationPeriod)
      ),
    [listOfSpecies, rotationPeriod]
  );

  const hasAreaInHectare: boolean = useMemo(
    () => listOfSpecies[0]?.hasOwnProperty('areaInHectare'),
    [listOfSpecies]
  );

  return (
    <>
      <b>{formatMessage({ id: 'components.operationClass.rotationPeriod' })}</b>{' '}
      {formatNumber(rotationPeriod)}
      <table>
        <thead>
          <tr>
            <th></th>
            <th>{formatMessage({ id: 'components.operationClass.yieldTable' })}</th>
            {hasAreaInHectare && (
              <th>{formatMessage({ id: 'components.operationClass.areas' })}</th>
            )}
            <th>{formatMessage({ id: 'components.operationClass.distribution' })}</th>
            <th>{formatMessage({ id: 'components.operationClass.siteProductivity' })}</th>
            <th>{formatMessage({ id: 'components.operationClass.normalStock' })}</th>
          </tr>
        </thead>
        <tbody>
          {listOfSpecies.map((species, index) => (
            <tr key={index}>
              <td>{species.title}</td>
              <td>
                <Link href={`${forestDocsBaseUrl}/yieldTables/${species.yieldTable}`}>
                  {yieldTables[species.yieldTable].meta.title}
                </Link>
              </td>
              {hasAreaInHectare && (
                <td align="right">
                  {formatMessage(
                    {
                      id: 'units.ha',
                    },
                    {
                      value: formatNumber((species as SpeciesWithAreaInHectare).areaInHectare, {
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 1,
                      }),
                    }
                  )}
                </td>
              )}
              <td align="right">
                {formatNumber(areasInPercentPerSpecies[index].areaInPercent, {
                  style: 'percent',
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                })}
              </td>
              <td align="right">
                {formatNumber(species.siteProductivity, {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                })}
              </td>
              <td align="right">
                {formatMessage(
                  {
                    id: 'units.vfmPerHa',
                  },
                  {
                    value: formatNumber(normalStocks[index], {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    }),
                  }
                )}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>{formatMessage({ id: 'components.operationClass.total' })}</td>
            <td />
            {hasAreaInHectare && (
              <td align="right">
                {formatMessage(
                  { id: 'units.ha' },
                  {
                    value: formatNumber(
                      (listOfSpecies as SpeciesWithAreaInHectare[]).reduce(
                        (sum, value) => sum + value.areaInHectare,
                        0
                      ),
                      {
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 1,
                      }
                    ),
                  }
                )}
              </td>
            )}
            <td align="right">
              {formatNumber(
                areasInPercentPerSpecies.reduce((sum, value) => sum + value.areaInPercent, 0),
                {
                  style: 'percent',
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                }
              )}
            </td>
            <td />
            <td align="right">
              {formatMessage(
                { id: 'units.vfmPerHa' },
                {
                  value: formatNumber(
                    normalStocks.reduce(
                      (sum, value, index) =>
                        sum + value * areasInPercentPerSpecies[index].areaInPercent,
                      0
                    ),
                    { minimumFractionDigits: 1, maximumFractionDigits: 1 }
                  ),
                }
              )}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
