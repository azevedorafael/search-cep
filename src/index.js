'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import App from './app'
import reducer from 'reducers'

const initialState = {
  todos: [{
    text: 'auto',
    id: '123',
    completed: false
  }],
  address: {
    status: 1,
    code: "03380-070",
    state: "SP",
    city: "São Paulo",
    district: "Chácara Belenzinhoooo",
    address: "Rua Sexto Empírico",
  }
}

const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.log('LOGGER:: will dispatch', action)
  const nextAction = next(action)
  console.log('LOGGER:: next action', nextAction)
  return nextAction
}

const store = createStore(reducer, initialState, applyMiddleware(logger), devToolsEnhancer(
  // Specify custom devTools options
))

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

  module.hot.accept('reducers', () => {
    const nextReducer = require('reducers').default
    store.replaceReducer(nextReducer)
  })
}
