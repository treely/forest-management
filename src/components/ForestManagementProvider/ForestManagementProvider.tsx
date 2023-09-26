import { BoemlyThemeProvider } from 'boemly';
import rootMessagesDe from '../../rootMessages.de';
import rootMessagesEn from '../../rootMessages.en';
import React, { createContext } from 'react';
import { createIntl, createIntlCache } from 'react-intl';

const cache = createIntlCache();

const intlFactory = (locale: string) =>
  createIntl(
    {
      locale,
      messages: { de: rootMessagesDe, en: rootMessagesEn }[locale],
    },
    cache
  );

export const IntlContext = createContext(intlFactory('en'));

interface ForestManagementProviderProps {
  children: React.ReactNode;
  locale: string;
}

export const ForestManagementProvider = ({ children, locale }: ForestManagementProviderProps) => (
  <BoemlyThemeProvider>
    <IntlContext.Provider value={intlFactory(locale)}>{children}</IntlContext.Provider>
  </BoemlyThemeProvider>
);
