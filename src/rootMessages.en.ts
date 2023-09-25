import componentsCalculateCurrentStockMessagesEn from './components/CalculateCurrentStock/messages.en';
import componentsForestryMessagesEn from './components/Forestry/messages.en';
import componentsOperationClassMessagesEn from './components/OperationClass/messages.en';

const rootMessagesEn = {
  ...componentsCalculateCurrentStockMessagesEn,
  ...componentsForestryMessagesEn,
  ...componentsOperationClassMessagesEn,

  // Units
  'units.ha': '{value} ha',
  'units.vfmPerHa': '{value} Vfm/ha',
  'units.vfmPerHaYear': '{value} Vfm/ha/y',
};

export default rootMessagesEn;
