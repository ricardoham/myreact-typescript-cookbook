import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../configs/history';
import Home from '../pages';
import Navbar from '../components/Navbar';

const Routes = () => (
  <main>
    <Router history={history}>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </main>
)

export default Routes;
