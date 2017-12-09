import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { startSetEvent } from './actions/events';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';

import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';

import './utils/Dependencies';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <div>
      <ToastContainer style={{ marginTop: 55 }} />
      <AppRouter />
    </div>
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // console.log(user.uid, ' uid');
    store.dispatch(login(user.uid));
    store.dispatch(startSetEvent()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
