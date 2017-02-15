import 'babel-polyfill'
import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes';
import configure from './store/configureStore';
import myhistory from './history'
import CONSTANT from './utils/constant'

export const store = configure({ config: CONSTANT })

const history = syncHistoryWithStore(myhistory, store)

const app = props =>
  <Provider store={store}>
    <Router history={history} >
      { routes }
    </Router>
  </Provider>

export default app
