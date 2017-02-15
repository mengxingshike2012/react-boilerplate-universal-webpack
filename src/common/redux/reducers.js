import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import homeState from '../pages/home/redux'
import shopState from '../pages/shop/redux'

const rootReducer = combineReducers({
  config: (state = {}) => state,
  routing,
  homeState,
  shopState,
})

export default rootReducer
