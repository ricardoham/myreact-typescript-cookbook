import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../configs/history';
import Home from '../pages';
import Navbar from '../components/Navbar';
import HooksPage from '../pages/HooksPage';
import PortalsPage from '../pages/PortalsPage';

const Routes = () => (
  <main>
    <Router history={history}>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hooks" component={HooksPage} />
        <Route path="/portals" component={PortalsPage} />
      </Switch>
    </Router>
  </main>
)

export default Routes;
