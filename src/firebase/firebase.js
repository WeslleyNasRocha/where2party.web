import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDhAzjuSCIob9HIXUefkOiK02GBFT0LL98',
  authDomain: 'where2party-test.firebaseapp.com',
  databaseURL: 'https://where2party-test.firebaseio.com',
  projectId: 'where2party-test',
  storageBucket: '',
  messagingSenderId: '710263664528',
};

firebase.initializeApp(config);

firebase
  .database()
  .ref()
  .set({
    name: 'Weslley Rocha',
  });
