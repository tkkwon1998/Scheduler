import * as firebase from "firebase";
import "firebase/auth";

import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDySxbU9fyqHTfeaHrSUJSCQZWgLZvnKeg",
  authDomain: "schedu-24322.firebaseapp.com",
  databaseURL: "https://schedu-24322.firebaseio.com",
  projectId: "schedu-24322",
  storageBucket: "schedu-24322.appspot.com",
  messagingSenderId: "482631553994",
  appId: "1:482631553994:web:c444e462488fbb705d3533",
  measurementId: "G-YZ7YMM10J1"
};

firebase.initializeApp(firebaseConfig);

export { firebase };
