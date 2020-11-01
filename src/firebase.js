import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5UsMQ4c0YQaRx5HnpItx9fSlIKSIqhy8",
    authDomain: "discord-clone-2a247.firebaseapp.com",
    databaseURL: "https://discord-clone-2a247.firebaseio.com",
    projectId: "discord-clone-2a247",
    storageBucket: "discord-clone-2a247.appspot.com",
    messagingSenderId: "319281712701",
    appId: "1:319281712701:web:9b9d1758c2c825f6456454",
    measurementId: "G-N6707SLMS3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db; 
