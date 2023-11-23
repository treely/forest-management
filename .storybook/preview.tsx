import React from 'react';
import type { Preview } from '@storybook/react';
import { ForestManagementProvider } from '../src';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ForestManagementProvider locale="en">
        <Story />
      </ForestManagementProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
