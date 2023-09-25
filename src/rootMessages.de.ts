import componentsCalculateCurrentStockMessagesDe from './components/CalculateCurrentStock/messages.de';
import componentsForestryMessagesDe from './components/Forestry/messages.de';
import componentsOperationClassMessagesDe from './components/OperationClass/messages.de';

const rootMessagesDe = {
  ...componentsCalculateCurrentStockMessagesDe,
  ...componentsForestryMessagesDe,
  ...componentsOperationClassMessagesDe,

  // Units
  'units.ha': '{value} ha',
  'units.vfmPerHa': '{value} Vfm/ha',
  'units.vfmPerHaYear': '{value} Vfm/ha/Jahr',
};

export default rootMessagesDe;
