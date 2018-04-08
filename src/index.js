import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import logger from 'redux-logger'

import App from './components/app';
import reducers from './reducers';

const middlewares = [
  promise,
  logger,
];
const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
