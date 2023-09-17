import AreaInHectare from './AreaInHectare';
import AreaInPercent from './AreaInPercent';
import YieldTableEnum from './YieldTableEnum';

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

interface FeasibilityStudyConfig {
  /** The forestry units of the forestry organization */
  operationClasses: {
    name: string;
    rotationPeriod: number;
    listOfSpecies: SpeciesWithPercentageArea[] | SpeciesWithAreaInHectare[];
    areaInHectare: number;
  }[];
  /** Stock of the forestry at a point of time (year) */
  stockAtPointOfTime: {
    year: number;
    stock: number;
  };
  /** The year that we want to calculate the stock for */
  currentYear: number;
  /** The yearly increment of the wood stock of the forestry */
  yearlyIncrement: number;
  /** The harvesting amounts per year and per coniferous- and deciduous-wood */
  harvestingAmounts?: {
    year: number;
    coniferousWood: number;
    deciduousWood: number;
  }[];
}

export default FeasibilityStudyConfig;
