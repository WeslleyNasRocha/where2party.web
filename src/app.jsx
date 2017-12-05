import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './firebase/firebase';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import './utils/Dependencies';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app'),
);
