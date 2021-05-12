import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';

import Header from './components/header';
import NewSavingPlan from './pages/new-saving-plan';
import SavingsList from './pages/savings-list';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <BrowserRouter>
      <Switch>
        <Route path="/savings/:savingId" component={NewSavingPlan} />
        <Route exact path="/savings" component={SavingsList} />
        <Route exact path="/">
          <Redirect to="/savings" />
        </Route>
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
