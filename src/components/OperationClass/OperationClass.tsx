import { useContext, useMemo } from 'react';
import yieldTables from '../../constants/yieldTables';
import AreaInHectare from '../../models/AreaInHectare';
import AreaInPercent from '../../models/AreaInPercent';
import YieldTableEnum from '../../models/YieldTableEnum';
import getAreaInPercent from '../../utils/getAreaInPercent';
import getNormalStock from '../../utils/getNormalStock';
import { IntlContext } from '../ForestManagementProvider';
import {
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  TableContainer,
  Tfoot,
  Flex,
  Link as BoemlyLink,
} from 'boemly';
import { TableWrapper } from '../TableWrapper';
import { FOREST_DOCS_URI } from '../../constants/integrations';

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
  areaInHectare?: number;
  listOfSpecies: SpeciesWithPercentageArea[] | SpeciesWithAreaInHectare[];
}

export const OperationClass: React.FC<OperationClassProps> = ({
  rotationPeriod,
  areaInHectare = 0,
  listOfSpecies,
}: OperationClassProps) => {
  const { formatNumber, formatMessage } = useContext(IntlContext);

  const areasInPercentPerSpecies = useMemo(() => getAreaInPercent(listOfSpecies), [listOfSpecies]);
  const areaInHectarePerSpecies: AreaInHectare[] = useMemo(() => {
    if (listOfSpecies[0]?.hasOwnProperty('areaInHectare')) {
      return listOfSpecies.map((species) => ({
        areaInHectare: (species as SpeciesWithAreaInHectare).areaInHectare,
      }));
    }
    if (areaInHectare && listOfSpecies[0]?.hasOwnProperty('areaInPercent')) {
      return listOfSpecies.map((species) => ({
        areaInHectare: (species as SpeciesWithPercentageArea).areaInPercent * areaInHectare,
      }));
    }
    return [];
  }, [listOfSpecies, areaInHectare]);

  const normalStocks = useMemo(
    () =>
      listOfSpecies.map((species) =>
        getNormalStock(yieldTables[species.yieldTable], species.siteProductivity, rotationPeriod)
      ),
    [listOfSpecies, rotationPeriod]
  );

  const hasAreaInHectare: boolean = useMemo(
    () => areaInHectarePerSpecies.length > 0,
    [areaInHectarePerSpecies]
  );

  return (
    <>
      <Flex gap="2" mb="2">
        <Text fontWeight="bold" as="span">
          {formatMessage({ id: 'components.operationClass.rotationPeriod' })}
        </Text>
        <Text as="span">{formatNumber(rotationPeriod)}</Text>
      </Flex>

      <TableWrapper>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>{formatMessage({ id: 'components.operationClass.yieldTable' })}</Th>
                {hasAreaInHectare && (
                  <Th>{formatMessage({ id: 'components.operationClass.areas' })}</Th>
                )}
                <Th>{formatMessage({ id: 'components.operationClass.distribution' })}</Th>
                <Th>{formatMessage({ id: 'components.operationClass.siteProductivity' })}</Th>
                <Th>{formatMessage({ id: 'components.operationClass.normalStock' })}</Th>
              </Tr>
            </Thead>
            <Tbody>
              {listOfSpecies.map((species, index) => (
                <Tr key={index}>
                  <Td>{species.title}</Td>
                  <Td>
                    <BoemlyLink
                      as="a"
                      href={`${FOREST_DOCS_URI}/yieldTables/${species.yieldTable}`}
                    >
                      {yieldTables[species.yieldTable].meta.title}
                    </BoemlyLink>
                  </Td>
                  {hasAreaInHectare && (
                    <Td align="right">
                      {formatMessage(
                        {
                          id: 'units.ha',
                        },
                        {
                          value: formatNumber(areaInHectarePerSpecies[index].areaInHectare, {
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1,
                          }),
                        }
                      )}
                    </Td>
                  )}
                  <Td align="right">
                    {formatNumber(areasInPercentPerSpecies[index].areaInPercent, {
                      style: 'percent',
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    })}
                  </Td>
                  <Td align="right">
                    {formatNumber(species.siteProductivity, {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    })}
                  </Td>
                  <Td align="right">
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
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>{formatMessage({ id: 'components.operationClass.total' })}</Th>
                <Th />
                {hasAreaInHectare && (
                  <Th align="right">
                    {formatMessage(
                      { id: 'units.ha' },
                      {
                        value: formatNumber(
                          areaInHectarePerSpecies.reduce(
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
                  </Th>
                )}
                <Th align="right">
                  {formatNumber(
                    areasInPercentPerSpecies.reduce((sum, value) => sum + value.areaInPercent, 0),
                    {
                      style: 'percent',
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    }
                  )}
                </Th>
                <Th />
                <Th align="right">
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
                </Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </TableWrapper>
    </>
  );
};
