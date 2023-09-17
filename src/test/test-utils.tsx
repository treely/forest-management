import React, { ReactElement } from 'react';
import { RenderOptions, render } from '@testing-library/react';
import { BoemlyThemeProvider } from 'boemly';
import { IntlProvider } from 'react-intl';
import rootMessagesEn from '../rootMessages.en';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <BoemlyThemeProvider>
      <IntlProvider messages={rootMessagesEn} locale="en">
        {children}
      </IntlProvider>
    </BoemlyThemeProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
