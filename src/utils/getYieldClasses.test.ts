import yieldTables from '@/constants/yieldTables';
import getYieldClasses from './getYieldClasses';

describe('The getYieldClasses forest util', () => {
  it('should return the yield class when the yield class exactly matches a yield class', () => {
    const yieldClass = 7;
    const expected = [7];

    const actual = getYieldClasses(
      yieldTables['at_tirol_fichteKalkErtragsniveauMittel'],
      yieldClass
    );

    expect(actual).toEqual(expected);
  });

  it('should return the yield classes when the yield class is between two yield class', () => {
    const yieldClass = 7.1;
    const expected = [7, 8];

    const actual = getYieldClasses(
      yieldTables['at_tirol_fichteKalkErtragsniveauMittel'],
      yieldClass
    );

    expect(actual).toEqual(expected);
  });

  it('should return the yield classes when the rows in the yield table are not sorted by yield class', () => {
    const yieldClass = 7.1;
    const expected = [7, 8];

    const actual = getYieldClasses(
      {
        ...yieldTables['at_tirol_fichteKalkErtragsniveauMittel'],
        rows: yieldTables['at_tirol_fichteKalkErtragsniveauMittel'].rows.reverse(),
      },
      yieldClass
    );

    expect(actual).toEqual(expected);
  });

  it('should throw an error if the yield class is lower then the lowest yield class', () => {
    const yieldClass = 0;

    const f = () =>
      getYieldClasses(yieldTables['at_tirol_fichteKalkErtragsniveauMittel'], yieldClass);

    expect(f).toThrow(
      'The yield class is lower than the lowest yield class on the yield board. Site productivity: 0'
    );
  });

  it('should throw an error if the yield class is higher then the highest yield class', () => {
    const yieldClass = 100;

    const f = () =>
      getYieldClasses(yieldTables['at_tirol_fichteKalkErtragsniveauMittel'], yieldClass);

    expect(f).toThrow(
      'The yield class is higher than the highest yield class on the yield board. Site productivity: 100'
    );
  });
});
