import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import homeState from '../pages/home/redux'
import shopState from '../pages/shop/redux'
import tabListResult from '../container/redux/tabList'
import navMenuType from '../container/redux/menu'
import franchiseeState from '../pages/franchisee/redux'
import investment from '../pages/investment/redux'

const rootReducer = combineReducers({
  config: (state = {}) => state,
  routing,
  homeState,
  shopState,
  tabListResult,
  navMenuType,
  franchiseeState,
  investment,
})

export default rootReducer
