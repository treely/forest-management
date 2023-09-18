import React, { ReactElement } from 'react';
import { RenderOptions, render } from '@testing-library/react';
import { BoemlyThemeProvider } from 'boemly';
import { ForestManagementProvider } from '..';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <BoemlyThemeProvider>
      <ForestManagementProvider locale="en">{children}</ForestManagementProvider>
    </BoemlyThemeProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
