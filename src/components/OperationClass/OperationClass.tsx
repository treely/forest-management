import { useContext, useMemo } from 'react';
import yieldTables from '../../constants/yieldTables';
import AreaInHectare from '../../models/AreaInHectare';
import AreaInPercent from '../../models/AreaInPercent';
import YieldTableEnum from '../../models/YieldTableEnum';
import getAreaInPercent from '../../utils/getAreaInPercent';
import getNormalStock from '../../utils/getNormalStock';
import { IntlContext } from '../ForestManagementProvider';
import { Table, Flex, Text, Link as BoemlyLink } from 'boemly';
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
  const { ScrollArea, Root, Header, Body, ColumnHeader, Row, Cell, Footer } = Table;

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
        <ScrollArea>
          <Root>
            <Header>
              <Row>
                <ColumnHeader></ColumnHeader>
                <ColumnHeader>
                  {formatMessage({ id: 'components.operationClass.yieldTable' })}
                </ColumnHeader>
                {hasAreaInHectare && (
                  <ColumnHeader>
                    {formatMessage({ id: 'components.operationClass.areas' })}
                  </ColumnHeader>
                )}
                <ColumnHeader>
                  {formatMessage({ id: 'components.operationClass.distribution' })}
                </ColumnHeader>
                <ColumnHeader>
                  {formatMessage({ id: 'components.operationClass.siteProductivity' })}
                </ColumnHeader>
                <ColumnHeader>
                  {formatMessage({ id: 'components.operationClass.normalStock' })}
                </ColumnHeader>
              </Row>
            </Header>
            <Body>
              {listOfSpecies
                .sort((speciesA, speciesB) => speciesA.title.localeCompare(speciesB.title))
                .map((species, index) => (
                  <Row key={index}>
                    <Cell>{species.title}</Cell>
                    <Cell>
                      <BoemlyLink
                        as="a"
                        href={`${FOREST_DOCS_URI}/yieldTables/${species.yieldTable}`}
                        style={{ textDecoration: 'underline' }}
                      >
                        {yieldTables[species.yieldTable].meta.title}
                      </BoemlyLink>
                    </Cell>
                    {hasAreaInHectare && (
                      <Cell align="right">
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
                      </Cell>
                    )}
                    <Cell align="right">
                      {formatNumber(areasInPercentPerSpecies[index].areaInPercent, {
                        style: 'percent',
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 1,
                      })}
                    </Cell>
                    <Cell align="right">
                      {formatNumber(species.siteProductivity, {
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 1,
                      })}
                    </Cell>
                    <Cell align="right">
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
                    </Cell>
                  </Row>
                ))}
            </Body>
            <Footer>
              <Row>
                <ColumnHeader>
                  {formatMessage({ id: 'components.operationClass.total' })}
                </ColumnHeader>
                <ColumnHeader />
                {hasAreaInHectare && (
                  <ColumnHeader align="right">
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
                  </ColumnHeader>
                )}
                <ColumnHeader align="right">
                  {formatNumber(
                    areasInPercentPerSpecies.reduce((sum, value) => sum + value.areaInPercent, 0),
                    {
                      style: 'percent',
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    }
                  )}
                </ColumnHeader>
                <ColumnHeader />
                <ColumnHeader align="right">
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
                </ColumnHeader>
              </Row>
            </Footer>
          </Root>
        </ScrollArea>
      </TableWrapper>
    </>
  );
};
