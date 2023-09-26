import { FOREST_DOCS_BASE_URL } from '../../constants/integrations';
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
export const ForestDocsContext = createContext(FOREST_DOCS_BASE_URL);

interface ForestManagementProviderProps {
  children: React.ReactNode;
  locale: string;
  forestDocsBaseUrl?: string;
}

export const ForestManagementProvider = ({
  children,
  locale,
  forestDocsBaseUrl,
}: ForestManagementProviderProps) => (
  <ForestDocsContext.Provider value={forestDocsBaseUrl ?? FOREST_DOCS_BASE_URL}>
    <IntlContext.Provider value={intlFactory(locale)}>{children}</IntlContext.Provider>
  </ForestDocsContext.Provider>
);
