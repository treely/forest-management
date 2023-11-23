import type { Meta, StoryObj } from '@storybook/react';

import { OperationClass } from '.';
import { feasibilityStudyConfigMock } from '../../test/mocks/feasibilityStudyConfig';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'OperationClass',
  component: OperationClass,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    listOfSpecies: {
      defaultValue: feasibilityStudyConfigMock.operationClasses[0].listOfSpecies,
      description: 'A list of the species in the operation class',
    },
    rotationPeriod: {
      defaultValue: feasibilityStudyConfigMock.operationClasses[0].rotationPeriod,
      description: 'Rotation period in years',
      type: 'number',
    },
  },
} satisfies Meta<typeof OperationClass>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    listOfSpecies: feasibilityStudyConfigMock.operationClasses[0].listOfSpecies,
    rotationPeriod: feasibilityStudyConfigMock.operationClasses[0].rotationPeriod,
  },
};
