import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { startSetEvent } from './actions/events';
import './firebase/firebase';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import './utils/Dependencies';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetEvent()).then(() => {
  console.log(store.getState());
  ReactDOM.render(jsx, document.getElementById('app'));
});
