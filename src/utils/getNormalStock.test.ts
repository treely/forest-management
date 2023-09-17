import yieldTables from '@/constants/yieldTables';
import getNormalStock from './getNormalStock';

describe('The getNormalStock forest util', () => {
  it('should return the normal stock for a yield class', () => {
    const yieldClass = 7.1;
    const rotationPeriod = 130;
    const expected = '278';

    const actual = getNormalStock(
      yieldTables['at_tirol_fichteKalkErtragsniveauMittel'],
      yieldClass,
      rotationPeriod
    );

    expect(actual.toFixed(0)).toEqual(expected);
  });

  it('should return the normal stock for a yield class', () => {
    const yieldClass = 5.4;
    const rotationPeriod = 130;
    const expected = '212';

    const actual = getNormalStock(
      yieldTables['at_tirol_laercheSuedtirol'],
      yieldClass,
      rotationPeriod
    );

    expect(actual.toFixed(0)).toEqual(expected);
  });

  it('should return the normal stock for a yield class', () => {
    const yieldClass = 7;
    const rotationPeriod = 130;
    const expected = '286';

    const actual = getNormalStock(yieldTables['at_tirol_buche'], yieldClass, rotationPeriod);

    expect(actual.toFixed(0)).toEqual(expected);
  });

  it('throws an error if no age level is found in the given yield table for the given rotation period', () => {
    const yieldClass = 7.1;
    const rotationPeriod = 135;

    const f = () =>
      getNormalStock(
        yieldTables['at_tirol_fichteKalkErtragsniveauMittel'],
        yieldClass,
        rotationPeriod
      );

    expect(f).toThrow('No age level found in given yield table for the given rotation period 135');
  });
});
