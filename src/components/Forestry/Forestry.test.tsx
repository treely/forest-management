import { render, screen } from '@/test/test-utils';
import { Forestry } from '.';
import { ForestryProps } from './Forestry';
import { feasibilityStudyConfigMock } from '@/test/mocks/feasibilityStudyConfig';

const totalAreaOfFeasibilityStudyConfigMock = feasibilityStudyConfigMock.operationClasses.reduce(
  (totalArea, operationClass) => totalArea + operationClass.areaInHectare,
  0
);

const defaultProps: ForestryProps = {
  config: feasibilityStudyConfigMock,
};

const setup = (props: Partial<ForestryProps> = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<Forestry {...combinedProps} />);
};

describe('The Forestry component', () => {
  it('displays all the units', () => {
    setup();

    feasibilityStudyConfigMock.operationClasses.forEach((operationClass) => {
      expect(screen.getByText(operationClass.name)).toBeInTheDocument();
    });
  });

  it('displays all the areas in percent', () => {
    setup();

    feasibilityStudyConfigMock.operationClasses.forEach((operationClass) => {
      expect(
        screen.getByText(
          `${((operationClass.areaInHectare / totalAreaOfFeasibilityStudyConfigMock) * 100).toFixed(
            1
          )}%`
        )
      ).toBeInTheDocument();
    });
  });

  it('displays all the areas in hectare', () => {
    setup();

    feasibilityStudyConfigMock.operationClasses.forEach((operationClass) => {
      expect(screen.getByText(`${operationClass.areaInHectare.toFixed(1)} ha`)).toBeInTheDocument();
    });
  });

  it('displays the total area in percent', () => {
    setup();

    expect(screen.getByText('100.0%')).toBeInTheDocument();
  });

  it('displays the total area in hectare', () => {
    setup();

    expect(screen.getByText(`3,343.0 ha`)).toBeInTheDocument();
  });

  it('displays the total normal stock', () => {
    setup();

    expect(screen.getByText('209.8 Vfm/ha')).toBeInTheDocument();
  });
});
