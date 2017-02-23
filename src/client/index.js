import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from '../common/app'

const root = document.getElementById('content');

// if (process.env.NODE_ENV !== 'production') {
//   window.React = React; // enable debugger
//
//   if (!root
//     || !root.firstChild
//     || !root.firstChild.attributes
//     || !root.firstChild.attributes['data-react-checksum']) {
//     console.warn(`Server-side React render was discarded.
//         Make sure that your initial render does not contain any client-side code.`);
//   }
// }

const render = (component) => {
  /* global ENABLE_DEVTOOLS */
  if (ENABLE_DEVTOOLS && !window.devToolsExtension) {
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
        root,
      );
  } else {
    ReactDOM.render(
      <div>
        <App />
      </div>,
      root,
      );
  }
}
render(App)

if (module.hot) {
  module.hot.accept('../common/app', () => {
    render(App)
  });
}
