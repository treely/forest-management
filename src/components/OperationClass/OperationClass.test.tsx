import { OperationClass } from '.';
import { render, screen } from '@/test/test-utils';
import YieldTableEnum from '@/models/YieldTableEnum';
import { OperationClassProps } from './OperationClass';

const speciesWithAreaInPercent = [
  {
    title: 'Fichte+sonstiges Nadelholz',
    areaInPercent: 0.78,
    siteProductivity: 7.1,
    yieldTable: YieldTableEnum.AT_TIROL_FichteKalkErtragsniveauMittel,
  },
  {
    title: 'Lärche',
    areaInPercent: 0.21,
    siteProductivity: 5.4,
    yieldTable: YieldTableEnum.AT_TIROL_LaercheSuedtirol,
  },
  {
    title: 'Laubholz',
    areaInPercent: 0.01,
    siteProductivity: 7,
    yieldTable: YieldTableEnum.AT_TIROL_Buche,
  },
];

const speciesWithAreaInHectare = [
  {
    title: 'Fichte+sonstiges Nadelholz',
    areaInHectare: 10,
    siteProductivity: 7.1,
    yieldTable: YieldTableEnum.AT_TIROL_FichteKalkErtragsniveauMittel,
  },
  {
    title: 'Lärche',
    areaInHectare: 2,
    siteProductivity: 5.4,
    yieldTable: YieldTableEnum.AT_TIROL_LaercheSuedtirol,
  },
  {
    title: 'Laubholz',
    areaInHectare: 1,
    siteProductivity: 7,
    yieldTable: YieldTableEnum.AT_TIROL_Buche,
  },
];

const defaultProps: OperationClassProps = {
  rotationPeriod: 130,
  listOfSpecies: speciesWithAreaInPercent,
};

const setup = (props: Partial<OperationClassProps> = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<OperationClass {...combinedProps} />);
};

describe('The OperationClass component', () => {
  it('displays all tree species', () => {
    setup();

    expect(screen.getByText('Fichte+sonstiges Nadelholz')).toBeInTheDocument();
    expect(screen.getByText('Lärche')).toBeInTheDocument();
    expect(screen.getByText('Laubholz')).toBeInTheDocument();
  });

  it('displays the distribution of the area and site productivity for each tree species', () => {
    setup();

    speciesWithAreaInPercent.forEach((species) => {
      expect(screen.getByText(`${(species.areaInPercent * 100).toFixed(1)}%`)).toBeInTheDocument();
      expect(screen.getByText(`${species.siteProductivity.toFixed(1)}`)).toBeInTheDocument();
    });
  });

  it('displays the absolute area and site productivity for each tree species if given', () => {
    setup({ listOfSpecies: speciesWithAreaInHectare });

    speciesWithAreaInHectare.forEach((species) => {
      expect(screen.getByText(`${species.areaInHectare.toFixed(1)} ha`)).toBeInTheDocument();
    });
  });

  it('displays the absolute areas for each tree species if given', () => {
    setup({ listOfSpecies: speciesWithAreaInHectare });

    speciesWithAreaInHectare.forEach((species) => {
      expect(screen.getByText(`${species.areaInHectare.toFixed(1)} ha`)).toBeInTheDocument();
    });
  });

  it('displays the normal stock for each tree species', () => {
    setup();

    expect(screen.getByText('278.0 Vfm/ha')).toBeInTheDocument();
    expect(screen.getByText('211.8 Vfm/ha')).toBeInTheDocument();
    expect(screen.getByText('285.5 Vfm/ha')).toBeInTheDocument();
  });

  it('displays the total area in hectare', () => {
    setup({ listOfSpecies: speciesWithAreaInHectare });

    const totalArea = speciesWithAreaInHectare.reduce(
      (acc, species) => acc + species.areaInHectare,
      0
    );

    expect(screen.getByText(`${totalArea.toFixed(1)} ha`)).toBeInTheDocument();
  });

  it('displays the total area in percent', () => {
    setup();

    const totalArea = speciesWithAreaInPercent.reduce(
      (acc, species) => acc + species.areaInPercent,
      0
    );

    expect(screen.getByText(`${(totalArea * 100).toFixed(1)}%`)).toBeInTheDocument();
  });

  it('displays a total normal stock', () => {
    setup();

    expect(screen.getByText('100.0%')).toBeInTheDocument();
    expect(screen.getByText('264.2 Vfm/ha')).toBeInTheDocument();
  });
});
