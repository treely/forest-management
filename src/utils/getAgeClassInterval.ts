import YieldTable from '../models/YieldTable';

const getAgeClassInterval = (yieldTable: YieldTable): number => {
  const ageClassInterval = yieldTable.rows[1].age - yieldTable.rows[0].age;
  return ageClassInterval;
};

export default getAgeClassInterval;
