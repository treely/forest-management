import FeasibilityStudyConfig from '@/models/FeasibilityStudyConfig';
import YieldTableEnum from '@/models/YieldTableEnum';

export const feasibilityStudyConfigMock: FeasibilityStudyConfig = {
  currentYear: 2022,
  stockAtPointOfTime: { year: 2012, stock: 184 },
  yearlyIncrement: 3.6,
  harvestingAmounts: [
    {
      year: 2012,
      coniferousWood: 11778,
      deciduousWood: 0,
    },
    {
      year: 2013,
      coniferousWood: 15531,
      deciduousWood: 10,
    },
    {
      year: 2014,
      coniferousWood: 13550,
      deciduousWood: 0,
    },
    {
      year: 2015,
      coniferousWood: 18876,
      deciduousWood: 2,
    },
    {
      year: 2016,
      coniferousWood: 15716,
      deciduousWood: 0,
    },
    {
      year: 2017,
      coniferousWood: 15690,
      deciduousWood: 0,
    },
    {
      year: 2018,
      coniferousWood: 17735,
      deciduousWood: 20,
    },
    {
      year: 2019,
      coniferousWood: 12267,
      deciduousWood: 0,
    },
    {
      year: 2020,
      coniferousWood: 11695,
      deciduousWood: 0,
    },
    {
      year: 2021,
      coniferousWood: 10485,
      deciduousWood: 0,
    },
  ],
  operationClasses: [
    {
      name: 'WP, Wa1, BKL A',
      rotationPeriod: 100,
      areaInHectare: 905.953,
      listOfSpecies: [
        {
          title: 'Fichte',
          areaInPercent: 0.8386,
          siteProductivity: 7.3,
          yieldTable: YieldTableEnum.AT_MARSCHALL_FichteHochgebirge,
        },
        {
          title: 'Lärche',
          areaInPercent: 0.112,
          siteProductivity: 6.5,
          yieldTable: YieldTableEnum.CH_MARSCHALL_LaercheSchweiz,
        },
        {
          title: 'Tanne',
          areaInPercent: 0.0142,
          siteProductivity: 6.2,
          yieldTable: YieldTableEnum.DE_MARSCHALL_TanneWuerttemberg,
        },
        {
          title: 'son. Laubholz (sLb)',
          areaInPercent: 0.034,
          siteProductivity: 3.7,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Birke',
          areaInPercent: 0.0009,
          siteProductivity: 3.2,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Bergahorn',
          areaInPercent: 0.0004,
          siteProductivity: 4,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
      ],
    },
    {
      name: 'WP, Wa1, BKL C',
      rotationPeriod: 120,
      areaInHectare: 163.807,
      listOfSpecies: [
        {
          title: 'Fichte',
          areaInPercent: 0.8696,
          siteProductivity: 4.4,
          yieldTable: YieldTableEnum.AT_MARSCHALL_FichteHochgebirge,
        },
        {
          title: 'Lärche',
          areaInPercent: 0.0632,
          siteProductivity: 4.1,
          yieldTable: YieldTableEnum.CH_MARSCHALL_LaercheSchweiz,
        },
        {
          title: 'Tanne',
          areaInPercent: 0.03,
          siteProductivity: 6, // Should be 4.9 but is not in the yield table
          yieldTable: YieldTableEnum.DE_MARSCHALL_TanneWuerttemberg,
        },
        {
          title: 'son. Laubholz (sLb)',
          areaInPercent: 0.0232,
          siteProductivity: 3.2,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Bergahorn',
          areaInPercent: 0.014,
          siteProductivity: 3,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
      ],
    },
    {
      name: 'WP, Wa2, BKL A',
      rotationPeriod: 100,
      areaInHectare: 678.629,
      listOfSpecies: [
        {
          title: 'Fichte',
          areaInPercent: 0.8153,
          siteProductivity: 6.6,
          yieldTable: YieldTableEnum.AT_MARSCHALL_FichteHochgebirge,
        },
        {
          title: 'Lärche',
          areaInPercent: 0.1331,
          siteProductivity: 5.7,
          yieldTable: YieldTableEnum.CH_MARSCHALL_LaercheSchweiz,
        },
        {
          title: 'Tanne',
          areaInPercent: 0.0006,
          siteProductivity: 6, // Should be 5 but is not in the yield table
          yieldTable: YieldTableEnum.DE_MARSCHALL_TanneWuerttemberg,
        },
        {
          title: 'Kiefer',
          areaInPercent: 0.0016,
          siteProductivity: 4.8,
          yieldTable: YieldTableEnum.AT_MARSCHALL_FichteHochgebirge,
        },
        {
          title: 'son. Laubholz (sLb)',
          areaInPercent: 0.0378,
          siteProductivity: 3.7,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Bergahorn',
          areaInPercent: 0.0046,
          siteProductivity: 4,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Birke',
          areaInPercent: 0.007,
          siteProductivity: 3.9,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
      ],
    },
    {
      name: 'WP, Wa2, BKL C',
      rotationPeriod: 120,
      areaInHectare: 170.493,
      listOfSpecies: [
        {
          title: 'Fichte',
          areaInPercent: 0.8371,
          siteProductivity: 4.2,
          yieldTable: YieldTableEnum.AT_MARSCHALL_FichteHochgebirge,
        },
        {
          title: 'Lärche',
          areaInPercent: 0.0654,
          siteProductivity: 4.5,
          yieldTable: YieldTableEnum.CH_MARSCHALL_LaercheSchweiz,
        },
        {
          title: 'son. Laubholz (sLb)',
          areaInPercent: 0.0731,
          siteProductivity: 3.9,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Birke',
          areaInPercent: 0.0092,
          siteProductivity: 4,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Bergahorn',
          areaInPercent: 0.0151,
          siteProductivity: 4,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
      ],
    },
    {
      name: 'WP, Pe, BKL A',
      rotationPeriod: 100,
      areaInHectare: 581.682,
      listOfSpecies: [
        {
          title: 'Fichte',
          areaInPercent: 0.9049,
          siteProductivity: 6.9,
          yieldTable: YieldTableEnum.AT_MARSCHALL_FichteHochgebirge,
        },
        {
          title: 'Lärche',
          areaInPercent: 0.0677,
          siteProductivity: 5.8,
          yieldTable: YieldTableEnum.CH_MARSCHALL_LaercheSchweiz,
        },
        {
          title: 'Tanne',
          areaInPercent: 0.0061,
          siteProductivity: 7.3,
          yieldTable: YieldTableEnum.DE_MARSCHALL_TanneWuerttemberg,
        },
        {
          title: 'Buche',
          areaInPercent: 0.0016,
          siteProductivity: 5,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'son. Laubholz (sLb)',
          areaInPercent: 0.0195,
          siteProductivity: 3.8,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Bergahorn',
          areaInPercent: 0.0002,
          siteProductivity: 4,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
      ],
    },
    {
      name: 'WP, Pe, BKL C',
      rotationPeriod: 120,
      areaInHectare: 153.778,
      listOfSpecies: [
        {
          title: 'Fichte',
          areaInPercent: 0.9491,
          siteProductivity: 3.3,
          yieldTable: YieldTableEnum.AT_MARSCHALL_FichteHochgebirge,
        },
        {
          title: 'Lärche',
          areaInPercent: 0.0353,
          siteProductivity: 3.5,
          yieldTable: YieldTableEnum.CH_MARSCHALL_LaercheSchweiz,
        },
        {
          title: 'Tanne',
          areaInPercent: 0.0117,
          siteProductivity: 6, // Should be 5.1 but is not in the yield table
          yieldTable: YieldTableEnum.DE_MARSCHALL_TanneWuerttemberg,
        },
        {
          title: 'son. Laubholz (sLb)',
          areaInPercent: 0.0028,
          siteProductivity: 3,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Bergahorn',
          areaInPercent: 0.0011,
          siteProductivity: 3,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
      ],
    },
    {
      name: 'SS, BKL A',
      rotationPeriod: 100,
      areaInHectare: 203.923,
      listOfSpecies: [
        {
          title: 'Fichte',
          areaInPercent: 0.8559,
          siteProductivity: 9.1,
          yieldTable: YieldTableEnum.AT_MARSCHALL_FichteHochgebirge,
        },
        {
          title: 'Lärche',
          areaInPercent: 0.0958,
          siteProductivity: 8.1,
          yieldTable: YieldTableEnum.CH_MARSCHALL_LaercheSchweiz,
        },
        {
          title: 'Zirbe',
          areaInPercent: 0.0015,
          siteProductivity: 6.2,
          yieldTable: YieldTableEnum.AT_MARSCHALL_FichteHochgebirge,
        },
        {
          title: 'son. Laubholz (sLb)',
          areaInPercent: 0.0185,
          siteProductivity: 4.7,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Birke',
          areaInPercent: 0.024,
          siteProductivity: 5.4,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Bergahorn',
          areaInPercent: 0.0043,
          siteProductivity: 4.4,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
      ],
    },
    {
      name: 'SS, BKL B',
      rotationPeriod: 80,
      areaInHectare: 33.43,
      listOfSpecies: [
        {
          title: 'Fichte',
          areaInPercent: 0.9963,
          siteProductivity: 9.3,
          yieldTable: YieldTableEnum.AT_MARSCHALL_FichteHochgebirge,
        },
        {
          title: 'son. Laubholz (sLb)',
          areaInPercent: 0.0037,
          siteProductivity: 5,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
      ],
    },
    {
      name: 'SS, BKL C',
      rotationPeriod: 120,
      areaInHectare: 451.305,
      listOfSpecies: [
        {
          title: 'Fichte',
          areaInPercent: 0.7678,
          siteProductivity: 7.6,
          yieldTable: YieldTableEnum.AT_MARSCHALL_FichteHochgebirge,
        },
        {
          title: 'Lärche',
          areaInPercent: 0.1694,
          siteProductivity: 6.2,
          yieldTable: YieldTableEnum.CH_MARSCHALL_LaercheSchweiz,
        },
        {
          title: 'Tanne',
          areaInPercent: 0.0023,
          siteProductivity: 6.3,
          yieldTable: YieldTableEnum.DE_MARSCHALL_TanneWuerttemberg,
        },
        {
          title: 'Buche',
          areaInPercent: 0.0023,
          siteProductivity: 3.4,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'son. Laubholz (sLb)',
          areaInPercent: 0.0263,
          siteProductivity: 4.5,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Birke',
          areaInPercent: 0.0274,
          siteProductivity: 4.1,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Bergahorn',
          areaInPercent: 0.0045,
          siteProductivity: 5.2,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
      ],
    },
  ],
};

export const feasibilityStudyNoHarvestingAmountsConfigMock: FeasibilityStudyConfig = {
  currentYear: 2022,
  stockAtPointOfTime: { year: 2022, stock: 184 },
  yearlyIncrement: 3.6,
  operationClasses: [
    {
      name: 'WP, Wa1, BKL A',
      rotationPeriod: 100,
      areaInHectare: 905.953,
      listOfSpecies: [
        {
          title: 'Fichte',
          areaInPercent: 0.8386,
          siteProductivity: 7.3,
          yieldTable: YieldTableEnum.AT_MARSCHALL_FichteHochgebirge,
        },
        {
          title: 'Lärche',
          areaInPercent: 0.112,
          siteProductivity: 6.5,
          yieldTable: YieldTableEnum.CH_MARSCHALL_LaercheSchweiz,
        },
        {
          title: 'Tanne',
          areaInPercent: 0.0142,
          siteProductivity: 6.2,
          yieldTable: YieldTableEnum.DE_MARSCHALL_TanneWuerttemberg,
        },
        {
          title: 'son. Laubholz (sLb)',
          areaInPercent: 0.034,
          siteProductivity: 3.7,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Birke',
          areaInPercent: 0.0009,
          siteProductivity: 3.2,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Bergahorn',
          areaInPercent: 0.0004,
          siteProductivity: 4,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
      ],
    },
    {
      name: 'WP, Wa1, BKL C',
      rotationPeriod: 120,
      areaInHectare: 163.807,
      listOfSpecies: [
        {
          title: 'Fichte',
          areaInPercent: 0.8696,
          siteProductivity: 4.4,
          yieldTable: YieldTableEnum.AT_MARSCHALL_FichteHochgebirge,
        },
        {
          title: 'Lärche',
          areaInPercent: 0.0632,
          siteProductivity: 4.1,
          yieldTable: YieldTableEnum.CH_MARSCHALL_LaercheSchweiz,
        },
        {
          title: 'Tanne',
          areaInPercent: 0.03,
          siteProductivity: 6, // Should be 4.9 but is not in the yield table
          yieldTable: YieldTableEnum.DE_MARSCHALL_TanneWuerttemberg,
        },
        {
          title: 'son. Laubholz (sLb)',
          areaInPercent: 0.0232,
          siteProductivity: 3.2,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Bergahorn',
          areaInPercent: 0.014,
          siteProductivity: 3,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
      ],
    },
    {
      name: 'WP, Wa2, BKL A',
      rotationPeriod: 100,
      areaInHectare: 678.629,
      listOfSpecies: [
        {
          title: 'Fichte',
          areaInPercent: 0.8153,
          siteProductivity: 6.6,
          yieldTable: YieldTableEnum.AT_MARSCHALL_FichteHochgebirge,
        },
        {
          title: 'Lärche',
          areaInPercent: 0.1331,
          siteProductivity: 5.7,
          yieldTable: YieldTableEnum.CH_MARSCHALL_LaercheSchweiz,
        },
        {
          title: 'Tanne',
          areaInPercent: 0.0006,
          siteProductivity: 6, // Should be 5 but is not in the yield table
          yieldTable: YieldTableEnum.DE_MARSCHALL_TanneWuerttemberg,
        },
        {
          title: 'Kiefer',
          areaInPercent: 0.0016,
          siteProductivity: 4.8,
          yieldTable: YieldTableEnum.AT_MARSCHALL_FichteHochgebirge,
        },
        {
          title: 'son. Laubholz (sLb)',
          areaInPercent: 0.0378,
          siteProductivity: 3.7,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Bergahorn',
          areaInPercent: 0.0046,
          siteProductivity: 4,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Birke',
          areaInPercent: 0.007,
          siteProductivity: 3.9,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
      ],
    },
    {
      name: 'WP, Wa2, BKL C',
      rotationPeriod: 120,
      areaInHectare: 170.493,
      listOfSpecies: [
        {
          title: 'Fichte',
          areaInPercent: 0.8371,
          siteProductivity: 4.2,
          yieldTable: YieldTableEnum.AT_MARSCHALL_FichteHochgebirge,
        },
        {
          title: 'Lärche',
          areaInPercent: 0.0654,
          siteProductivity: 4.5,
          yieldTable: YieldTableEnum.CH_MARSCHALL_LaercheSchweiz,
        },
        {
          title: 'son. Laubholz (sLb)',
          areaInPercent: 0.0731,
          siteProductivity: 3.9,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Birke',
          areaInPercent: 0.0092,
          siteProductivity: 4,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Bergahorn',
          areaInPercent: 0.0151,
          siteProductivity: 4,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
      ],
    },
    {
      name: 'WP, Pe, BKL A',
      rotationPeriod: 100,
      areaInHectare: 581.682,
      listOfSpecies: [
        {
          title: 'Fichte',
          areaInPercent: 0.9049,
          siteProductivity: 6.9,
          yieldTable: YieldTableEnum.AT_MARSCHALL_FichteHochgebirge,
        },
        {
          title: 'Lärche',
          areaInPercent: 0.0677,
          siteProductivity: 5.8,
          yieldTable: YieldTableEnum.CH_MARSCHALL_LaercheSchweiz,
        },
        {
          title: 'Tanne',
          areaInPercent: 0.0061,
          siteProductivity: 7.3,
          yieldTable: YieldTableEnum.DE_MARSCHALL_TanneWuerttemberg,
        },
        {
          title: 'Buche',
          areaInPercent: 0.0016,
          siteProductivity: 5,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'son. Laubholz (sLb)',
          areaInPercent: 0.0195,
          siteProductivity: 3.8,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Bergahorn',
          areaInPercent: 0.0002,
          siteProductivity: 4,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
      ],
    },
    {
      name: 'WP, Pe, BKL C',
      rotationPeriod: 120,
      areaInHectare: 153.778,
      listOfSpecies: [
        {
          title: 'Fichte',
          areaInPercent: 0.9491,
          siteProductivity: 3.3,
          yieldTable: YieldTableEnum.AT_MARSCHALL_FichteHochgebirge,
        },
        {
          title: 'Lärche',
          areaInPercent: 0.0353,
          siteProductivity: 3.5,
          yieldTable: YieldTableEnum.CH_MARSCHALL_LaercheSchweiz,
        },
        {
          title: 'Tanne',
          areaInPercent: 0.0117,
          siteProductivity: 6, // Should be 5.1 but is not in the yield table
          yieldTable: YieldTableEnum.DE_MARSCHALL_TanneWuerttemberg,
        },
        {
          title: 'son. Laubholz (sLb)',
          areaInPercent: 0.0028,
          siteProductivity: 3,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Bergahorn',
          areaInPercent: 0.0011,
          siteProductivity: 3,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
      ],
    },
    {
      name: 'SS, BKL A',
      rotationPeriod: 100,
      areaInHectare: 203.923,
      listOfSpecies: [
        {
          title: 'Fichte',
          areaInPercent: 0.8559,
          siteProductivity: 9.1,
          yieldTable: YieldTableEnum.AT_MARSCHALL_FichteHochgebirge,
        },
        {
          title: 'Lärche',
          areaInPercent: 0.0958,
          siteProductivity: 8.1,
          yieldTable: YieldTableEnum.CH_MARSCHALL_LaercheSchweiz,
        },
        {
          title: 'Zirbe',
          areaInPercent: 0.0015,
          siteProductivity: 6.2,
          yieldTable: YieldTableEnum.AT_MARSCHALL_FichteHochgebirge,
        },
        {
          title: 'son. Laubholz (sLb)',
          areaInPercent: 0.0185,
          siteProductivity: 4.7,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Birke',
          areaInPercent: 0.024,
          siteProductivity: 5.4,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Bergahorn',
          areaInPercent: 0.0043,
          siteProductivity: 4.4,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
      ],
    },
    {
      name: 'SS, BKL B',
      rotationPeriod: 80,
      areaInHectare: 33.43,
      listOfSpecies: [
        {
          title: 'Fichte',
          areaInPercent: 0.9963,
          siteProductivity: 9.3,
          yieldTable: YieldTableEnum.AT_MARSCHALL_FichteHochgebirge,
        },
        {
          title: 'son. Laubholz (sLb)',
          areaInPercent: 0.0037,
          siteProductivity: 5,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
      ],
    },
    {
      name: 'SS, BKL C',
      rotationPeriod: 120,
      areaInHectare: 451.305,
      listOfSpecies: [
        {
          title: 'Fichte',
          areaInPercent: 0.7678,
          siteProductivity: 7.6,
          yieldTable: YieldTableEnum.AT_MARSCHALL_FichteHochgebirge,
        },
        {
          title: 'Lärche',
          areaInPercent: 0.1694,
          siteProductivity: 6.2,
          yieldTable: YieldTableEnum.CH_MARSCHALL_LaercheSchweiz,
        },
        {
          title: 'Tanne',
          areaInPercent: 0.0023,
          siteProductivity: 6.3,
          yieldTable: YieldTableEnum.DE_MARSCHALL_TanneWuerttemberg,
        },
        {
          title: 'Buche',
          areaInPercent: 0.0023,
          siteProductivity: 3.4,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'son. Laubholz (sLb)',
          areaInPercent: 0.0263,
          siteProductivity: 4.5,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Birke',
          areaInPercent: 0.0274,
          siteProductivity: 4.1,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
        {
          title: 'Bergahorn',
          areaInPercent: 0.0045,
          siteProductivity: 5.2,
          yieldTable: YieldTableEnum.DE_MARSCHALL_BucheBraunschweig,
        },
      ],
    },
  ],
};
