import getAreaInPercent from './getAreaInPercent';

describe('The getAreaInPercent forest util', () => {
  it('should return an empty array if the input is an empty array', () => {
    const result = getAreaInPercent([]);

    expect(result).toEqual([]);
  });

  it('should return the input if the input is an array of AreaInPercent', () => {
    const result = getAreaInPercent([{ areaInPercent: 0.5 }]);

    expect(result).toEqual([{ areaInPercent: 0.5 }]);
  });

  it('should calculate the area in percent if the input is an array of AreaInHectare', () => {
    const result = getAreaInPercent([{ areaInHectare: 20 }, { areaInHectare: 80 }]);

    expect(result).toEqual([
      { areaInHectare: 20, areaInPercent: 0.2 },
      { areaInHectare: 80, areaInPercent: 0.8 },
    ]);
  });
});
