import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGWEDTy_lm2b5A-KOS9E5mCZevbBHKidc",
    authDomain: "tik-tok-clone-84b4b.firebaseapp.com",
    projectId: "tik-tok-clone-84b4b",
    storageBucket: "tik-tok-clone-84b4b.appspot.com",
    messagingSenderId: "119520068777",
    appId: "1:119520068777:web:e04a238a321b188b1895b8",
    measurementId: "G-ERW1Z9QS1X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;