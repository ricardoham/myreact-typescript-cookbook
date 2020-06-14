import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../configs/history';
import Home from '../pages';

const Routes = () => (
  <main>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </main>
)

export default Routes;
