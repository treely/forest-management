import AreaInHectare from '@/models/AreaInHectare';
import AreaInPercent from '@/models/AreaInPercent';

const getAreaInPercent = (list: AreaInPercent[] | AreaInHectare[]): AreaInPercent[] => {
  if (list.length === 0) {
    return [];
  }

  if (list[0].hasOwnProperty('areaInPercent')) {
    return list as AreaInPercent[];
  }

  const listOfSpeciesWithAreaInHectare = list as AreaInHectare[];
  const totalArea = listOfSpeciesWithAreaInHectare.reduce(
    (acc, species) => acc + species.areaInHectare,
    0
  );

  return listOfSpeciesWithAreaInHectare.map((species) => ({
    ...species,
    areaInPercent: species.areaInHectare / totalArea,
  }));
};

export default getAreaInPercent;
