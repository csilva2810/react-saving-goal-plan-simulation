import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, RenderOptions } from '@testing-library/react';

import { theme } from './styles/theme';

const Providers: React.FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const renderWithProviders = (
  component: React.ReactElement,
  options: RenderOptions = {}
) => render(component, { wrapper: Providers, ...options });
