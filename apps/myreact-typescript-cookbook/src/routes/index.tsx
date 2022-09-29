import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import About from 'pages/AboutPage';
import Hooks from 'pages/ReactFundamentalsPage/sections/Hooks';
import Portals from 'pages/ReactFundamentalsPage/sections/Portals';
import FormsPage from 'pages/FormsPage/Form';
import StateManagementPage from 'pages/StateManagementPage';
import ReactFundamentalsPage from 'pages/ReactFundamentalsPage';

const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" element={<About />} />
    <Route path="/react-fundamentals" element={<ReactFundamentalsPage />} />
    <Route path="/hooks" element={<Hooks />} />
    <Route path="/portals" element={<Portals />} />
    <Route path="/forms" element={<FormsPage />} />
    <Route path="/state-management" element={<StateManagementPage />} />
  </Switch>
);

export default Routes;
