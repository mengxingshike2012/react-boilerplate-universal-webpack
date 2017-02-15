import React from 'react'
import ReactDOM from 'react-dom/server'

import Html from '../helpers/Html'

export default (req, res, next) => {
  if (global.IS_DEVELOPMENT) {
    global.webpackIsomorphicTools.refresh()
  }
  const token = req.csrfToken()
  function setContent() {
    const store = {
      getState() {
        return {
          csrfToken: token,
        }
      },
    }
    res.send(`<!doctype html>
      ${ReactDOM.renderToString(<Html assets={global.webpackIsomorphicTools.assets()} store={store} />)}`);
  }
    // when ssr is disabled,
  function hydrateOnClient() {
    setContent()
  }

  if (global.DISABLE_SSR) {
    hydrateOnClient();
  }
}
