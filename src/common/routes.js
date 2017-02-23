import React from 'react';
import { Route } from 'react-router';
import Container from './container';
import home from './pages/home';
import shop from './pages/shop';
import { BusinessCityList, CityZones } from './pages/investment'
import franchisee from './pages/franchisee'

const routes = (
  <Route path="/" component={Container}>
    <Route path="home" component={home} />
    <Route path="shop" component={shop} />
    <Route path="businessCityList" component={BusinessCityList} />
    <Route path="cityZones" component={CityZones} />
    <Route path="franchisee" component={franchisee} />
  </Route>
);

export default routes;
