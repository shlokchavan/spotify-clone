import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBlOWQR5tSs0mFrPpMqhlvdhTdGO5kwQu8",
  authDomain: "spotify-clone-e25ee.firebaseapp.com",
  databaseURL: "https://spotify-clone-e25ee.firebaseio.com",
  projectId: "spotify-clone-e25ee",
  storageBucket: "spotify-clone-e25ee.appspot.com",
  messagingSenderId: "566730841328",
  appId: "1:566730841328:web:bbe41b92eb8138435bb635",
  measurementId: "G-8XN7ZE14R5",
});

const db = firebaseApp.database();

export default db;
