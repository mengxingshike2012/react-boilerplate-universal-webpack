import React from 'react';
import { Route } from 'react-router';
import home from './pages/home';
import shop from './pages/shop';

const routes = (
  <Route>
    <Route path="/home" component={home} />
    <Route path="/shop" component={shop} />
  </Route>
);

export default routes;
