 import firebase from 'firebase/app'
 import 'firebase/firestore'

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBEpg6DVkrEVpsvHd8pxkFkWN2KsIsOHbo",
    authDomain: "todo-ninja-f6109.firebaseapp.com",
    databaseURL: "https://todo-ninja-f6109.firebaseio.com",
    projectId: "todo-ninja-f6109",
    storageBucket: "todo-ninja-f6109.appspot.com",
    messagingSenderId: "204043874008"
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();

  db.settings({timestampsInSnapshots: true});

  export default db;