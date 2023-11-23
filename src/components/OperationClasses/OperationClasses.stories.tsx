import type { Meta, StoryObj } from '@storybook/react';

import { OperationClasses } from '.';
import { feasibilityStudyConfigMock } from '../../test/mocks/feasibilityStudyConfig';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'OperationClasses',
  component: OperationClasses,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    config: {
      defaultValue: feasibilityStudyConfigMock,
      description: 'The feasibility study config',
    },
  },
} satisfies Meta<typeof OperationClasses>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    config: feasibilityStudyConfigMock,
  },
};
