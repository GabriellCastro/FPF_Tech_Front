import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import ProjectNew from '../pages/ProjectNew';
import ProjectEdit from '../pages/ProjectEdit';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={ Home } />
      <Route
        path="/new"
        component={ ProjectNew } />
      <Route
        path="/edit/:id"
        component={ ProjectEdit } />
    </Switch>
  </BrowserRouter>
)

export default Routes;
