import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBPPr456sLslKUkiRss17A25VfXWfUxs5c",
    authDomain: "tripganizer.firebaseapp.com",
    projectId: "tripganizer",
    storageBucket: "tripganizer.appspot.com",
    messagingSenderId: "116979073740",
    appId: "1:116979073740:web:ad54754da2d24f982bb869",
    measurementId: "G-R53EXLX0S3"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const firestore = firebaseApp.firestore();
  export const auth = firebase.auth();
  export const storage = firebase.storage().ref();
  
export default firebaseApp;