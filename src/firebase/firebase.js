import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAiceitFuCvdfw0xATK2FYRPgpVBkp9q4E",
  authDomain: "where2party-51f6a.firebaseapp.com",
  databaseURL: "https://where2party-51f6a.firebaseio.com",
  projectId: "where2party-51f6a",
  storageBucket: "where2party-51f6a.appspot.com",
  messagingSenderId: "519155446978"
};

firebase.initializeApp(config);

const database = firebase.database();

const emailAuthProvider = new firebase.auth.EmailAuthProvider();

export { firebase, emailAuthProvider, database as default };
