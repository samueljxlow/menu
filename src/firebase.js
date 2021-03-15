import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCT6L8BAeDijKhZQJAUgGVyXQ-kRZeEQkk",
    authDomain: "bt3103-week-6-81974.firebaseapp.com",
    projectId: "bt3103-week-6-81974",
    storageBucket: "bt3103-week-6-81974.appspot.com",
    messagingSenderId: "684508763616",
    appId: "1:684508763616:web:665b0b5d33596dd0810785",
    measurementId: "G-60ZB47DS94"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;