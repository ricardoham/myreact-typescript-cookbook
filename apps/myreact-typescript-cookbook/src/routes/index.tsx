import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Home from 'pages/Home';
import HooksPage from 'pages/HooksPage';
import PortalsPage from 'pages/PortalsPage';
import FormsExample from 'pages/FormsExample/Form';
import StateManagementPage from 'pages/StateManagement';

const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" element={<Home />} />
    <Route path="/hooks" element={<HooksPage />} />
    <Route path="/portals" element={<PortalsPage />} />
    <Route path="/forms" element={<FormsExample />} />
    <Route path="/state-management" element={<StateManagementPage />} />
  </Switch>
);

export default Routes;
