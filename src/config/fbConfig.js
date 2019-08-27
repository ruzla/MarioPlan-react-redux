import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';

var firebaseConfig = {
    apiKey: "AIzaSyCG5dvZUNhYKOtH7BNwvGvwR97CSWUpLJk",
    authDomain: "mario-plan-24336.firebaseapp.com",
    databaseURL: "https://mario-plan-24336.firebaseio.com",
    projectId: "mario-plan-24336",
    storageBucket: "",
    messagingSenderId: "197672305813",
    appId: "1:197672305813:web:cc67229e73a7ac07"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;