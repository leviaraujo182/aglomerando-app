import * as firebase from 'firebase';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyDDZF2MtozwSaL4J6mCck4iNxa-7wqGnAc",
    authDomain: "aglomerando-app.firebaseapp.com",
    projectId: "aglomerando-app",
    storageBucket: "aglomerando-app.appspot.com",
    messagingSenderId: "621130952335",
    appId: "1:621130952335:web:4093564151cf46ec398afa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  export const database = firebase.firestore();