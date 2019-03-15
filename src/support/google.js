import firebase from  'firebase'

var config = {
    apiKey: "AIzaSyDzx8K9RQLnaBOiM7ZpW8T6SjXNX16k7ps",
    authDomain: "login-with-angga.firebaseapp.com",
    databaseURL: "https://login-with-angga.firebaseio.com",
    projectId: "login-with-angga",
    storageBucket: "",
    messagingSenderId: "429848212533"
  };

  firebase.initializeApp(config)
  export const ref = firebase.database().ref();
  export const auth = firebase.auth;
  export const provider = new firebase.auth.GoogleAuthProvider()