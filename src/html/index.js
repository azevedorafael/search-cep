'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import App from './app'
import configureStore from './redux-flow/configure-store'

const store = configureStore(
//   {
//   initialState : {
//     todos: [{
//       text: 'auto',
//       id: '123',
//       completed: false
//     }],
//     address: {
//       status: 1,
//       code: "03380-070",
//       state: "SP",
//       city: "São Paulo",
//       district: "Chácara Belenzinhoooo",
//       address: "Rua Sexto Empírico",
//     }
//   }
// }
)

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <NextApp />
      </Provider>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}