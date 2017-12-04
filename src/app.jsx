import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import './utils/Dependencies';

const config = {
  apiKey: 'AIzaSyAiceitFuCvdfw0xATK2FYRPgpVBkp9q4E',
  authDomain: 'where2party-51f6a.firebaseapp.com',
  databaseURL: 'https://where2party-51f6a.firebaseio.com',
  projectId: 'where2party-51f6a',
  storageBucket: 'where2party-51f6a.appspot.com',
  messagingSenderId: '519155446978'
};

firebase.initializeApp(config);

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
);
