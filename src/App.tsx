import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';

import NewSavingPlan from './pages/new-saving-plan';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <NewSavingPlan />
  </ThemeProvider>
);

export default App;
