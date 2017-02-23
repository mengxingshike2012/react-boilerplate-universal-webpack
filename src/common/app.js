import 'babel-polyfill'
import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes';
import { store } from './store/configureStore';
import myhistory from './history'
import './styles/index.scss';
// import CONSTANT from './utils/constant'

// export const store = configure({ config: CONSTANT })

const history = syncHistoryWithStore(myhistory, store)

const app = props =>
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>

export default app
