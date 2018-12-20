import * as firebase from 'firebase'

 const config = {
    apiKey: "AIzaSyDwHNzfm9GLMVWu35ip0hQ3fvQ3SJUt8k8",
    authDomain: "tallerlogin.firebaseapp.com",
    databaseURL: "https://tallerlogin.firebaseio.com",
    projectId: "tallerlogin",
    storageBucket: "tallerlogin.appspot.com",
    messagingSenderId: "495286687219"
  };
  firebase.initializeApp(config);

  export default firebase