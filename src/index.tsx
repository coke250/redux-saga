import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'
import rootReducer, { rootSaga } from './modules'
import { Provider } from 'react-redux'

// saga middleware 생성
const sagaMiddleware = createSagaMiddleware()

// 스토어 생성
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

// saga middleware 실행
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
