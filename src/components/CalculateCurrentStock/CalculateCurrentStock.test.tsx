import React from 'react';
import { render, screen } from '@/test/test-utils';
import { CalculateCurrentStockProps } from './CalculateCurrentStock';
import { CalculateCurrentStock } from '.';
import {
  feasibilityStudyConfigMock,
  feasibilityStudyNoHarvestingAmountsConfigMock,
} from '@/test/mocks/feasibilityStudyConfig';

const defaultProps: CalculateCurrentStockProps = {
  config: feasibilityStudyConfigMock,
};

const setup = (props: Partial<CalculateCurrentStockProps> = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  render(<CalculateCurrentStock {...combinedProps} />);
};

describe('The CalculateCurrentStock component', () => {
  it('displays the yearly increment', () => {
    setup();

    expect(screen.getByText('3.6 Vfm/ha/y')).toBeInTheDocument();
  });

  it('displays the average yearly harvesting amount', () => {
    setup();

    expect(screen.getByText('5.7 Vfm/ha/y')).toBeInTheDocument();
  });

  it('displays the stock in the year of the inventory', () => {
    setup();

    expect(screen.getByText('184.0 Vfm/ha')).toBeInTheDocument();
  });

  it('displays the current stock', () => {
    setup();

    expect(screen.getByText('162.8 Vfm/ha')).toBeInTheDocument();
  });

  it('displays n.a. if no harvesting amounts are provided', () => {
    setup({ config: { ...feasibilityStudyNoHarvestingAmountsConfigMock } });

    expect(screen.getByText('n.a. Vfm/ha/y')).toBeInTheDocument();
    expect(screen.getAllByText('184.0 Vfm/ha').length).toBe(2);
    expect(screen.getByText('3.6 Vfm/ha/y')).toBeInTheDocument();
  });

  it('displays a warning if one of the harvesting amounts is missing', () => {
    setup({
      config: {
        ...feasibilityStudyConfigMock,
        harvestingAmounts: [
          { coniferousWood: 1, deciduousWood: 1, year: 2020 },
          { coniferousWood: 1, deciduousWood: 1, year: 2021 },
        ],
      },
    });

    expect(
      screen.getByText('There are missing harvesting amounts for some years between 2012 and 2022')
    ).toBeInTheDocument();
  });

  it('displays an error if the current year is before the year of the inventory', () => {
    setup({ config: { ...feasibilityStudyConfigMock, currentYear: 2011 } });

    expect(
      screen.getByText('The current year must be after the year of the stock at a point of time')
    ).toBeInTheDocument();
  });
});
