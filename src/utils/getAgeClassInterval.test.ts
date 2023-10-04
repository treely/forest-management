import yieldTables from '../constants/yieldTables';
import getAgeClassInterval from './getAgeClassInterval';

describe('The getAgeClassInterval forest util', () => {
  it('should return the age class interval for a yield table', () => {
    const result = getAgeClassInterval(yieldTables['at_tirol_laercheSuedtirol']);

    expect(result).toEqual(10);
  });

  it('should return the age class interval for a yield table', () => {
    const result = getAgeClassInterval(yieldTables['de_assmann_fichteBayernOcell']);

    expect(result).toEqual(5);
  });
});
